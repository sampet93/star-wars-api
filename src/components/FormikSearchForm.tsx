import React from "react";
import { getPeople } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Formik, Form, Field, validateYupSchema } from "formik";
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Stack } from "@mui/system";

interface FormikSearchFormValues {
  search: string;
  searchOption: string;
}

const FormikSearchForm: React.FC = () => {
  const { data, error, loading } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const initialValues: FormikSearchFormValues = { search: "", searchOption: "" };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(getPeople(values.search));
        }}
      >
        {({ submitForm, handleChange, values }) => (
          <Form autoComplete="off">
            <Stack spacing={2}>
              <FormControl sx={{ minWidth: 160 }}>
                <InputLabel id="search-for-label">Search For</InputLabel>
                <Field
                  component={Select}
                  as="select"
                  name="searchOption"
                  id="searchOption"
                  labelId="search-for-label"
                  label="Search For"
                  value={values.searchOption}
                  onChange={handleChange("searchOption")}
                >
                  <MenuItem value="people">People</MenuItem>
                  <MenuItem value="planets">Planets</MenuItem>
                  <MenuItem value="starships">Starships</MenuItem>
                </Field>
              </FormControl>
              <Field
                component={TextField}
                variant="outlined"
                label="Search"
                id="search"
                name="search"
                placeholder="Enter search term..."
                value={values.search}
                onChange={handleChange}
              />
              <Button variant="outlined" disabled={loading} onClick={submitForm}>
                Search
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikSearchForm;
