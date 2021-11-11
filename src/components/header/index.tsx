import { FC } from 'react';
import Box from "@mui/material/Box";  

export const Header: FC = () => {
    return (
    <Box 
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "blue",
        padding: "15px 30px",
        boxSizing: "border-box"
      }}
    >
        Будущее лого
    </Box>
    );
};