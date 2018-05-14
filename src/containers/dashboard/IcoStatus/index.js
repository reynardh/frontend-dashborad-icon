import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Callout } from '@blueprintjs/core';

import Block from '../../../components/dashboard/Block';

import { openMakeDepositPopup } from '../../../redux/modules/app/makeDepositPopup';

import s from './styles.scss';
import { bigNum } from '../../../helpers/common/common';

const IcoStatus = (props) => {
  const {
    fetching,
    tokenPrice,
    tokensSold,
    raised,
    daysToGo
  } = props;

  return (
    <Callout title="ICO status">
      <div className={s.block}>
        <Block
          label="Token price"
          value={`${bigNum(tokenPrice.ETH, 3)} ETH / ${bigNum(tokenPrice.USD, 1)}$`}
          fetching={fetching}
          placeholderWidth={{ val: 179, label: 75 }}/>
      </div>

      <div className={s.block}>
        <Block
          label="Tokens sold"
          value={`${bigNum(tokensSold, 0)} SPACE`}
          fetching={fetching}
          placeholderWidth={{ val: 157, label: 85 }}/>
      </div>

      <div className={s.block}>
        <Block
          label="Raised"
          value={`${bigNum(raised.ETH, 3)} ETH`}
          fetching={fetching}
          placeholderWidth={{ val: 195, label: 98 }}/>
      </div>

      {daysToGo > 0
        ? (
          <div className={s.block}>
            <Block
              label="Days to go"
              value={daysToGo}
              fetching={fetching}/>
          </div>
        )
        : null}
    </Callout>
  );
};


const TranslatedComponent = translate('dashboard')(IcoStatus);
export default connect(
  (state) => ({
    ...state.dashboard.dashboard
  }),
  {
    openMakeDepositPopup
  }
)(TranslatedComponent);
