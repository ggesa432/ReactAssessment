import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory';

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomValue: null,
    };
  }

  handleRandomValue = (value) => {
    this.setState({ randomValue: value });
  };


  render() {
    const story = "Some random stroy of success.";
    return (
      <div className="success-container">
        <h1>Success Quotes</h1>
        <ul>
          <li>"Successful people are not gifted; they just work hard, then succeed on purpose." —G.K. Nielson</li>
          <li>"Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come." —Dwayne Johnson</li>
          <li>"The only thing standing between you and outrageous success is continuous progress." —Dan Waldschmidt</li>
          <li>"I never dreamt of success. I worked for it." —Estée Lauder</li>
        </ul>
        <SuccessChild name="Gesang Zeren" address="111 World Trade Center, New York City"  story={story} onRandomValue={this.handleRandomValue}/>
        {this.state.randomValue && (
          <div className="random-value">
            <h3>Random Value from SuccessStory:</h3>
            <p>{this.state.randomValue}</p>
            </div>
        )}
      </div>
    );
  }
}

export default Success;