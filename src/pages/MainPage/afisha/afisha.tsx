import { useState, useEffect, useCallback } from 'react';
import { FC } from 'react';
import { Card } from '../../../components/card';
import { Header } from '../../../components/header';
import { CardsLayout } from '../../../components/cards-layout';
import { Grid, SelectChangeEvent } from '@mui/material';
import { Controls  } from '../../../components/controls';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat)

export const getActionURL = (suffix: string): string => {
  return "http://localhost:5000" + suffix;
}

export interface IEvent {
  /**Название мероприятия */
  name: string;
  /** Дата мероприятия пропала*/
  date: string;
  time: string;

  tickets_number: number;
  /** Заставить фильтровать заявки по статусу мероприятия  */
  status: string; 
  /**Не используется*/
  in_archive: boolean;
  /**урл изображения */
  picture: string;

  tickets: ITicket[];

  event_description: string | undefined;

  type_event: string;

  _id: string;
}

export interface ITicket {
  event: IEvent;
  first_name: string;
  second_name: string;
}


export const MainPage: FC = () => {
  // Это состояние для только что загруженных всех событий. 
  // Относительно него будем выводить отфильтрованные элементы
  const [initiallyLoadedEvents, setInitiallyLoadedEvents] = useState<IEvent[]>([]);

  /** Это состояние для вывода результата  */
   const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([]);


   /**Состояния для выбора типа события */
   const [selectedEventTypeFilter, setSelectedEventTypeFilter] = useState<string>("concert");
   const handleSelectedEventTypeFilterChange = useCallback((e: SelectChangeEvent) => {
    setSelectedEventTypeFilter(e.target.value);
   }, [])

   /**Состояние для строки поиска */
   const [searchQuery, setSearchQuery] = useState<string>("");
   const onChange = useCallback((e) => setSearchQuery(e.target.value), []);
   const debouncedSearchQuery = useDebounce(searchQuery, 300);

   const [selectedEventDate, setSelectedEventDate] = useState<Dayjs | null>(null);
   const onDateChange = useCallback((v: Dayjs | null) => setSelectedEventDate(v), []);

   // Делаем запрос на бекенд за всеми событиями афиши
   useEffect(() => {
     fetch(getActionURL("/events"))
       .then(r => r.json())
       .then(setInitiallyLoadedEvents)
       .catch(e => console.error(e))
   }, [])

   /** Эффект для фильтрации событий по поиску/типу события/дате события */
   useEffect(() => {
     let resultEventsAfterFitler: IEvent[] = [...initiallyLoadedEvents];

     if (selectedEventTypeFilter) {
       resultEventsAfterFitler = resultEventsAfterFitler.filter(e => e.type_event === selectedEventTypeFilter);
     }

     if (debouncedSearchQuery) {
       resultEventsAfterFitler = resultEventsAfterFitler.filter(e => e.name.includes(debouncedSearchQuery));
     }

    
     if (selectedEventDate) {
      resultEventsAfterFitler = resultEventsAfterFitler.filter(e => {
        const eventBeginningDate = dayjs(e.date, "DD.MM.YYYY");

        return eventBeginningDate.isSame(selectedEventDate, "d");
      });
     }

     setFilteredEvents(resultEventsAfterFitler);
   }, [selectedEventTypeFilter, initiallyLoadedEvents, debouncedSearchQuery, selectedEventDate])


    return (
        <>
          <Header/>
          <Controls 
            selectedOption={selectedEventTypeFilter}
            handleChange={handleSelectedEventTypeFilterChange}

            searchQuery={searchQuery}
            onChange={onChange}

            selectedDate={selectedEventDate}
            onDateChange={onDateChange}
          />  
          <CardsLayout>
              <Grid container spacing={2}>
                {filteredEvents.map((e, index) => (
                  <Grid key={`${e.name}-${index}`} item xs={12} sm={4}>
                       <Card {...e} />
                  </Grid>
                ))}
              </Grid>
          </CardsLayout>
        </>
    );
};

function useDebounce<T>(value: T, debounceTime: number): T | undefined {
  const [innerValue, setInnerValue] = useState<T>();

  useEffect(() => {
    const timeoutId = setTimeout(() => setInnerValue(value), debounceTime);

    return () => clearTimeout(timeoutId)
  }, [value, debounceTime])

  return innerValue
}