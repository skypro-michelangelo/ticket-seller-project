import { FC } from 'react';
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../images/logo.svg"


export const Header: FC = () => {
    return (
    <Box 
      sx={{
        width: "100%",
        height: "70px",
        backgroundColor: "#434ADC",
        opacity: "50%",
        padding: "15px 30px",
        boxSizing: "border-box"
      }}
    >
        <Logo />
    </Box>
    );
};