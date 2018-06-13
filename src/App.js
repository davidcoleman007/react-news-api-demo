import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { SourceView } from './components/SorceView/SourceView';
import { ArticleView } from './components/ArticleView';

class App extends Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(source) {

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">Welcome to my Newsapi.org app</h1>
        </header>
        <main>
          <Route exact path="/" component={SourceView}/>
          <Route path="/articles" component={ArticleView}/>
        </main>
      </div>
    );
  }
}

export default App;
