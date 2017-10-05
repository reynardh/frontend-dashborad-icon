import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import s from './styles.css';

import { namedRoutes } from '../../../routes';
import { emailValidate, passwordValidate } from '../../../utils/validators';
// import signInValidator from '../../../utils/validators/signIn';

import RenderInput from '../../forms/RenderInput';
import Button from '../../common/Button';

const SignInForm = (props) => {
  const { spinner, handleSubmit, invalid } = props;

  console.log(props);

  return (
    <div>
      <div className={s.title}>Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className={s.field}>
          <Field
            component={RenderInput}
            name="email"
            type="text"
            placeholder="e-mail"
            validate={emailValidate}/>
        </div>

        <div className={s.field}>
          <Field
            component={RenderInput}
            name="password"
            type="password"
            placeholder="password"
            validate={passwordValidate}/>
        </div>

        <div className={s.password}>
          <Link to={namedRoutes.password}>I forgot my password</Link>
        </div>

        <div className={s.button}>
          <Button type="submit" spinner={spinner} disabled={invalid}>Submit</Button>
        </div>
      </form>

      <div className={s.footer}>
        <Link to={namedRoutes.signUp}>Sign Up</Link> if you don’t have an account
      </div>
    </div>
  );
};

const FormComponent = reduxForm({
  form: 'signIn',
  // validate: signInValidator,
  initialValues: {
    email: '',
    password: ''
  }
})(SignInForm);

export default FormComponent;
