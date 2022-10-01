import React from "react";
import FormikSearchForm from "./components/FormikSearchForm";
import ResultsArea from "./components/ResultsArea";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "./hooks/useTypedSelector";

const App: React.FC = () => {
  const { loading, error } = useAppSelector((state) => state);
  return (
    <div>
      <FormikSearchForm />
      <ResultsArea />
      {loading && <CircularProgress />}
    </div>
  );
};

export default App;
