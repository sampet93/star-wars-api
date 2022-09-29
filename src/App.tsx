import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { getPeople } from "./store/actions";

function App() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getPeople(search));
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" onChange={handleInput} />
        <input type="submit" name="search" />
      </form>
    </div>
  );
}

export default App;
