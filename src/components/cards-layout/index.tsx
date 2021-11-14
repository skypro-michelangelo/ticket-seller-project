import React, { FC } from "react";
import Box from "@mui/material/Box";

export const CardsLayout: FC = ({ children }): JSX.Element => {
  return (
    <Box
      sx={{
          width: "100%",
          padding: "30px",
          boxSizing: "border-box"
      }}
    >
        {children}
    </Box>
  )
}