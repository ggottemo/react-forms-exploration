// https://www.react-hook-form.com/get-started/

import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

type FormData = {
  firstName: string;
  lastName: string;
};

const ReactHookFormPage  = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>
    ({defaultValues: {
        firstName: "firstname default value"
        }});

  const onSubmit = (data: FormData) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-field">
        <label htmlFor="firstName" className="p-d-block">First Name</label>
        <InputText 
          id="firstName" 
          {...register('firstName', { required: 'First name is required', minLength: {
              value: 5,
                  message: "Must be longer than 5"
              },})}
        />
        {errors.firstName && <small className="p-error">{errors.firstName.message}</small>}

      </div>

      <div className="p-field">
        <label htmlFor="lastName" className="p-d-block">Last Name</label>
        <InputText 
          id="lastName" 
          {...register('lastName', { required: 'Last name is required' })} 
        />
        {errors.lastName && <small className="p-error">{errors.lastName.message}</small>}
      </div>

      <Button type="submit" label="Submit" />
    </form>
  );
}

export default ReactHookFormPage;
