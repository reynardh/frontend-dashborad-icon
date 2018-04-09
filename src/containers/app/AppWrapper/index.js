import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { fetchUser } from '../../../redux/modules/app/app';
import { openSidebar, closeSidebar } from '../../../redux/modules/app/sidebar';

import Topbar from '../../../components/app/Topbar';
import MakeDepositPopup from '../MakeDepositPopup';
import KycAlertPopup from '../KycAlertPopup';

class AppWrapper extends Component {
  componentWillMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }

  render() {
    const {
      children,
      kycStatus,
      location
    } = this.props;

    const {
      pathname
    } = location;

    const kycToBool = () => {
      if (kycStatus !== 'verified') {
        return false;
      }

      return true;
    };

    return (
      <div className={s.wrapper}>
        <div className={s.main}>
          <Topbar kyc={kycToBool()} pathname={pathname} />
          <div className={s.children}>{children}</div>
        </div>

        <MakeDepositPopup/>
        <KycAlertPopup/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    kycStatus: state.app.app.user.kycStatus,
    sidebarIsOpen: state.app.sidebar.open
  }),
  {
    fetchUser,
    openSidebar,
    closeSidebar
  }
)(AppWrapper);
