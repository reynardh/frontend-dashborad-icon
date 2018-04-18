import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import appSaga from './app/appSaga';
import themeSaga from './app/themeSaga';

import emailsInputSaga from './common/emailsInputSaga';

import signUpSaga from './auth/signUpSaga';
import signInSaga from './auth/signInSaga';
import resetPasswordSaga from './auth/resetPasswordSaga';

import referralsSaga from './referrals/referralsSaga';
import invitePopupSaga from './referrals/invitePopupSaga';

import dashboardSaga from './dashboard/dashboardSaga';
import buyTokensSaga from './dashboard/buyTokensSaga';
import txFeeSaga from './dashboard/txFeeSaga';

import changePasswordSaga from './settings/changePasswordSaga';
import enableTwoFactorAuthSaga from './settings/enableTwoFactorAuthSaga';
import disableTwoFactorAuthSaga from './settings/disableTwoFactorAuthSaga';

import transactionsSaga from './transactions/transactionsSaga';

import sendTokensSaga from './sendTokens/sendTokensSaga';

import verificationSaga from './verification/verificationSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(appSaga),
    fork(themeSaga),
    fork(emailsInputSaga),
    fork(signUpSaga),
    fork(signInSaga),
    fork(resetPasswordSaga),
    fork(referralsSaga),
    fork(invitePopupSaga),
    fork(dashboardSaga),
    fork(buyTokensSaga),
    fork(txFeeSaga),
    fork(changePasswordSaga),
    fork(enableTwoFactorAuthSaga),
    fork(disableTwoFactorAuthSaga),
    fork(transactionsSaga),
    fork(sendTokensSaga),
    fork(verificationSaga)
  ]);
}
