import { Chip } from "@mui/material"
import { FC } from "react"

interface ICardTagProps {
    text: string | number;

}

export const CardTag: FC<ICardTagProps> = ({ text }): JSX.Element => {
    return <Chip color={"secondary"} label={text} />
}