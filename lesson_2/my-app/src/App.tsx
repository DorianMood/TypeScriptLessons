import * as React from 'react';
import './App.css';
import { Counter } from './Counter';
import { CounterSFC } from './CounterSFC';

export default class App extends React.Component<{}, { count: number }> {

  constructor() {
    super({});
    this.state = {
      count: 0
    };
  }

  public inc = () => { this.setState({ count: this.state.count + 1 }); }

  public dec = () => { this.setState({ count: this.state.count - 1 }); }

  public render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <CounterSFC
              count={ this.state.count }
              onIncrement={ this.inc }
              onDecrement={ this.dec }
            />
          </div>
          <div className='col-md-6'>
            <Counter
              start={ 0 }
            />
          </div>
        </div>
      </div>
    );
  }
}