// Render Prop
import React from "react";
import { Formik, Form, FastField } from "formik";

const Basic = () => (
  <div>
    <Formik>
      <Form>
        <FastField name="firstName" />
        <FastField name="lastName" />
        <FastField name="addressLine1" />
        <FastField name="postCode" />
      </Form>
    </Formik>
  </div>
);

export default Basic;
