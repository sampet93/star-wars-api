import React from "react";
import FormikSearchForm from "./components/FormikSearchForm";
import ResultsArea from "./components/ResultsArea";

const App: React.FC = () => {
  return (
    <div>
      <FormikSearchForm />
      <ResultsArea />
    </div>
  );
};

export default App;
