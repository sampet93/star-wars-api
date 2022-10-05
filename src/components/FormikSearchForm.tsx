import React from "react";
import { getData } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Formik, Form, Field, validateYupSchema, ErrorMessage } from "formik";
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Stack } from "@mui/system";
import * as yup from "yup";
import { SearchOptions } from "../store/types";

export interface FormikSearchFormValues {
  search: string;
  searchOption: SearchOptions;
}

const searchValidationSchema = yup.object().shape({
  search: yup.string().required("Search term required"),
  searchOption: yup.string().required("Search category required"),
});

const FormikSearchForm: React.FC = () => {
  const { data, error, loading } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const initialValues: FormikSearchFormValues = { search: "", searchOption: SearchOptions.PEOPLE };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(getData(values));
        }}
        validateOnChange={true}
        validateOnMount={false}
        validationSchema={searchValidationSchema}
      >
        {({ submitForm, handleChange, values, errors }) => (
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
                helperText={errors.search}
                error={errors.search !== undefined}
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
