import React from 'react';
import { format } from 'date-fns';
import { Tag, Intent } from '@blueprintjs/core';
import { translate } from 'react-i18next';

import s from './styles.scss';
import { shortAddress, etherscanLink } from '../../../utils/numbers';

const Transaction = (props) => {
  const {
    timestamp,
    transactionHash,
    status,
    type,
    direction,
    ethAmount,
    tokenAmount
  } = props;

  const renderStatus = () => {
    switch (status) {
      case 'pending':
        return (<Tag className="pt-minimal" intent={Intent.PRIMARY}>Pending</Tag>);
      case 'confirmed':
        return (<Tag className="pt-minimal" intent={Intent.SUCCESS}>Success</Tag>);
      default:
        return (<Tag className="pt-minimal" intent={Intent.DANGER}>Failure</Tag>);
    }
  };

  const dir = () => (direction === 'out' ? 'withdraw' : 'income');
  const amount = () => (type === 'eth_transfer' ? ethAmount : tokenAmount);
  const symbol = () => (type === 'eth_transfer' ? 'ETH' : 'SPACE');

  return (
    <div className={s.tx}>
      <h4>
        <span>{amount()} {symbol()} {dir()}</span>
        <a target="_blank" href={etherscanLink('tx', transactionHash)}>{shortAddress(transactionHash)}</a>
        {renderStatus()}
      </h4>
      <div className="pt-text-muted">
        {format(timestamp * 1000, 'DD MMMM YYYY HH:mm:ss')}
      </div>
    </div>
  );
};

const TranslatedComponent = translate('transactions')(Transaction);

export default TranslatedComponent;
