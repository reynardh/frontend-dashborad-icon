import React from 'react';
import { reduxForm, Field } from 'redux-form';
import iso3311a2 from 'iso-3166-1-alpha-2';
import { format } from 'date-fns';

import RenderInput from '../RenderInput';
import RenderPassword from '../RenderPassword';
import RenderSelect from '../RenderSelect';
import RenderCheckbox from '../RenderCheckbox';
import RenderDatePicker from '../RenderDatePicker';

import { required, twoFactorCode } from '../../../utils/validators';
import s from './styles.scss';

const Playground = (props) => {
  const {
    handleSubmit,
    // invalid,
    // fetching
  } = props;

  return (
    <div className={s.playground}>
      <form onSubmit={handleSubmit}>
        <Field
          name="bod"
          component={RenderDatePicker}
          label="Date picker label"
          tip="Date picker tip"
          placeholder="YYYY MM DD"
          inputProps={{ large: true }}
          popoverProps={{ className: 'pt-fill' }}
          validate={required}
          minDate={new Date('1900-01-01')}
          maxDate={new Date('2000-01-01')}
          formatDate={(str) => format(str, 'DD MMMM YYYY')}
          parseDate={(str) => new Date(str)}
          normalize={(str) => format(str, 'YYYY-MM-DD')}
          format={(str) => new Date(str)}/>

        <Field
          name="checkbox"
          component={RenderCheckbox}
          label="Group label"
          checkboxLabel="I agree all shit"
          validate={required}/>

        <Field
          name="second"
          type="text"
          component={RenderInput}
          large
          leftIcon="search"
          placeholder="Search..."
          rightElement={<button className="pt-button pt-minimal pt-intent-warning pt-icon-lock"></button>}
          label="2FA input"
          validate={twoFactorCode}/>

        <Field
          name="second"
          type="text"
          component={RenderInput}
          large
          leftIcon="search"
          placeholder="Search..."
          rightElement={<button className="pt-button pt-minimal pt-intent-warning pt-icon-lock"></button>}
          label="2FA input"
          validate={twoFactorCode}
          tip="You may input only 6 digits"/>

        <Field
          name="password"
          component={RenderPassword}
          large
          leftIcon="lock"
          placeholder="Your password"
          label="Password"
          validate={required}
          tip="Password must be at least 8 characters length, contain at least one number, one capital letter, one small letter. Special characters are allowed."/>

        <Field
          name="country"
          component={RenderSelect}
          label="Password"
          large
          className="pt-fill pt-large"
          tip="This information required for KYC/AML"
          validate={required}>
          <option value="">Select country</option>
          {iso3311a2.getCodes().map((code) =>
            <option key={code} value={code}>{iso3311a2.getCountry(code)}</option>)}
        </Field>
      </form>
    </div>
  );
};

const FormComponent = reduxForm({
  form: 'initSignIn',
  initialValues: {
    bod: new Date('1990-01-01'),
    email: '',
    password: ''
  }
})(Playground);
export default FormComponent;
