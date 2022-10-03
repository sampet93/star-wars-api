import React from "react";
import FormikSearchForm from "./components/FormikSearchForm";
import ResultsArea from "./components/ResultsArea";
import { CircularProgress, Container } from "@mui/material";
import { useAppSelector } from "./hooks/useTypedSelector";

const App: React.FC = () => {
  const { loading, error } = useAppSelector((state) => state);
  return (
    <Container maxWidth="xs">
      <FormikSearchForm />
      <ResultsArea />
      {loading && <CircularProgress />}
    </Container>
  );
};

export default App;
