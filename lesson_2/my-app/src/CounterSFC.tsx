import * as React from 'react';
import './CounterSFC.css';

interface ICounterSFCProps {
  count: number;
  min?: number;
  max?: number;
  onIncrement?: () => any;
  onDecrement?: () => any;
}

export const CounterSFC: React.SFC<ICounterSFCProps> = (props) => {
  const { count, onIncrement, onDecrement } = props;

  const onIncrementEvent = () => {
    if (onIncrement) {
      onIncrement();
    }
  };
  const onDecrementEvent = () => {
    if (onDecrement) {
      onDecrement();
    }
  };

  return (
    <>
      <div className='center-align count'>
        <h3>{ count }</h3>
      </div>
      <div className='center-align buttons'>
        <a className="btn-floating btn-large waves-effect waves-light red"
           onClick={ onDecrementEvent }>
          <i className="material-icons">exposure_neg_1</i>
        </a>
        <a className="btn-floating btn-large waves-effect waves-light green"
           onClick={ onIncrementEvent }>
          <i className="material-icons">exposure_plus_1</i>
        </a>
      </div>
    </>
  );
}
