'use strict';

import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: 'rafa',
        photo: 'https://avatars3.githubusercontent.com/u/38443896?v=4',
        login: 'rafaelsevla',
        repos: 12,
        followers: 10,
        following: 20
      },
      repos: [{ name: 'repo', link: '#' }],
      starred: [{ name: 'repo', link: '#' }]
    };
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
