import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import MoreButton from './Components/moreButton.js';
import PostList from './Components/postList.js';


class App extends Component {
  constructor() {
    super();
    this.state = {counter: 10};
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const{counter} = this.state;
    this.setState({
      counter: counter + 10
    });
  }
  render() {
    const slisedList = data.slice(0, this.state.counter);
    return (
      <div className="App">
        <PostList list={slisedList} />
				<MoreButton onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;



