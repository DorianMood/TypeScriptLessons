import * as React from 'react';
import './CounterSFC.css';

interface ICounterProps {
  start: number;
  min?: number;
  max?: number;
}
interface ICounterState {
  count: number;
}

export class Counter extends React.Component<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);
    const { start } = props;
    this.state = {
      count: start
    }

  }

  public onIncrementEvent = () => {
    this.setState({ count: this.state.count + 1 })
  };
  public onDecrementEvent = () => {
    this.setState({ count: this.state.count - 1 })
  };
  
  public render() {
    return (
      <>
        <div className='center-align count'>
          <h3>{ this.state.count }</h3>
        </div>
        <div className='center-align buttons'>
          <a className="btn-floating btn-large waves-effect waves-light red"
             onClick={ this.onDecrementEvent }>
            <i className="material-icons">exposure_neg_1</i>
          </a>
          <a className="btn-floating btn-large waves-effect waves-light green"
             onClick={ this.onIncrementEvent }>
            <i className="material-icons">exposure_plus_1</i>
          </a>
        </div>
      </>
    );
  }
}
