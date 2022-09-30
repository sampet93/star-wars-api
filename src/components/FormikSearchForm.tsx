import React from "react";
import { getPeople } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Formik, Form, Field } from "formik";

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
          console.log({ values, actions });
          dispatch(getPeople(values.search));
        }}
      >
        <Form autoComplete="off">
          <Field as="select" name="searchOption">
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
          </Field>
          <Field id="search" name="search" placeholder="Enter search term..." />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikSearchForm;
