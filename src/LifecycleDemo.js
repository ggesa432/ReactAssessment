import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being constructed.');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing props to state if needed.', props);
    return null; // Return updated state if changes are needed
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted.');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component update?', nextState);
    // Prevent update if state value is unchanged (duplicate)
    if (nextState.count === this.state.count) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Snapshot before update.', prevState);
    return null; // Return a snapshot value 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has updated.', prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being unmounted.');
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count +1})); 
  };

  render() {
    console.log('Render: Rendering component.');
    return (
      <div className="lifecycle-demo">
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;