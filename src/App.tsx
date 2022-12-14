import React from "react";
import FormikSearchForm from "./components/FormikSearchForm";
import ResultsArea from "./components/ResultsArea";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useAppSelector } from "./hooks/useTypedSelector";

const PAGE_TITLE = "Star Wars API";

const theme = createTheme({
  typography: {
    fontFamily: "Segoe UI",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#fff185",
    },
    background: {
      default: "#1c222c",
    },
    text: {
      primary: "#fff185",
      secondary: "#fff185",
    },
  },
});

const App: React.FC = () => {
  const { loading, error } = useAppSelector((state) => state);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Typography
          align="center"
          variant="h4"
          fontWeight={"bold"}
          sx={{ marginBottom: "20px", marginTop: "20px" }}
        >
          {PAGE_TITLE}
        </Typography>
        <FormikSearchForm />
        <ResultsArea />
      </Container>
    </ThemeProvider>
  );
};

export default App;
