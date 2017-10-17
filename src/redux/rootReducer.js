import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import { reducer as formReducer } from 'redux-form';

import app from './modules/app/app';
import makeDepositPopup from './modules/app/makeDepositPopup';

import emailsInput from './modules/common/emailsInput';

import signIn from './modules/auth/signIn';
import signUp from './modules/auth/signUp';
import restorePassword from './modules/auth/restorePassword';

import users from './modules/referrals/users';
import invitePopup from './modules/referrals/invitePopup';

import editAccount from './modules/account/editAccount';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,

  app: combineReducers({
    app,
    makeDepositPopup
  }),

  common: combineReducers({
    emailsInput
  }),

  auth: combineReducers({
    signIn,
    signUp,
    restorePassword
  }),

  referrals: combineReducers({
    users,
    invitePopup
  }),

  account: combineReducers({
    editAccount
  })
});
