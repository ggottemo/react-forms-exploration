// https://final-form.org/docs/react-final-form/getting-started
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

type FormData = {
  firstName: string;
  lastName: string;
};

const ReactFinalFormPage  = () => {
  const onSubmit = (data: FormData) => alert(JSON.stringify(data));

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
          console.log(form);
          console.log(values);
          return (

              <form onSubmit={handleSubmit}>
                  <div className="p-field">
                      <label htmlFor="firstName" className="p-d-block">First Name</label>
                      <Field name="firstName" validate={(value: string) => !value ? 'Required' : undefined}>
                          {({ input, meta }) => (
                              <div>
                                  <InputText id="firstName" {...input} />
                                  {meta.touched && meta.error && <small className="p-error">{meta.error}</small>}
                              </div>
                          )}
                      </Field>
                  </div>

                  <div className="p-field">
                      <label htmlFor="lastName" className="p-d-block">Last Name</label>
                      <Field name="lastName" validate={(value: string)  => !value ? 'Required' : undefined}>
                          {({ input, meta }) => (
                              <div>
                                  <InputText id="lastName" {...input} />
                                  {meta.touched && meta.error && <small className="p-error">{meta.error}</small>}
                              </div>
                          )}
                      </Field>
                  </div>

                  <Button type="submit" label="Submit" disabled={submitting || pristine} />
              </form>
          )
      }}
    />
  );
}

export default ReactFinalFormPage;
