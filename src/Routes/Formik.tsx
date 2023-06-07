// https://formik.org/docs/overview

import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import * as Yup from 'yup';


// Define validation schema with Yup -- can also define manually via validation prop. This seems pretty neat though.
const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required').email()
});

const FormikPage = () => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-field">
        <label htmlFor="firstName" className="p-d-block">First Name</label>
        <InputText
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <small id="username2-help" className="p-error">{formik.errors.firstName}</small>
        ) : null}
      </div>

      <div className="p-field">
        <label htmlFor="lastName" className="p-d-block">Last Name</label>
        <InputText
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <small id="username2-help" className="p-error">{formik.errors.lastName}</small>
        ) : null}
      </div>

      <Button type="submit" label="Submit" />
    </form>
  );
}

export default FormikPage;
