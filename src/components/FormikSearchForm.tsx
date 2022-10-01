import React from "react";
import { getPeople } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

interface FormikSearchFormValues {
  search: string;
}

const FormikSearchForm: React.FC = () => {
  const { data, error, loading } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const initialValues: FormikSearchFormValues = { search: "" };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(getPeople(values.search));
        }}
      >
        {({ submitForm }) => (
          <Form autoComplete="off">
            <FormControl fullWidth>
              <InputLabel id="search-for-label">Search For</InputLabel>
              <Field
                component={Select}
                as="select"
                name="searchOption"
                labelId="search-for-label"
                label="Search For"
              >
                <MenuItem value="people">People</MenuItem>
                <MenuItem value="planets">Planets</MenuItem>
                <MenuItem value="starships">Starships</MenuItem>
              </Field>
              <Field
                variant="standard"
                id="search"
                name="search"
                placeholder="Enter search term..."
              />
              <Button variant="outlined" disabled={loading} onClick={submitForm}>
                Search
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikSearchForm;
