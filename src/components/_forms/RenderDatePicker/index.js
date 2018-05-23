import React from 'react';
import { FormGroup, Intent } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';

// TODO
// errors not working correctly here.
// redux-form metas like dirty or active false all time

const RenderInput = (props) => {
  const {
    meta,
    input,
    label,
    tip,
    ...restProps
  } = props;

  const {
    error,
    active,
    invalid,
    dirty
  } = meta;

  const isInvalid = () => {
    if (!active && invalid && dirty) return true;
    if (!invalid) return false;
    return null;
  };

  return (
    <FormGroup
      label={label}
      helperText={isInvalid() ? error : tip}
      intent={isInvalid() ? Intent.DANGER : Intent.NONE}>

      <DateInput
        formatDate={(date) => date.toLocaleString()}
        parseDate={(str) => new Date(str)}
        {...input}
        {...restProps}/>
    </FormGroup>
  );
};

export default RenderInput;
