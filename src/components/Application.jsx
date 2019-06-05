import React, { Component } from 'react';
import Posts from './Posts';
import Authentication from './Authentication';
import { UserContext } from '../providers/UserProvider';

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFireStore = null;
  unsubscribeFromAuth = null;

  render() {
    const { user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <UserContext.Consumer>
          {user => {
            return <Authentication user={user} />;
          }}
        </UserContext.Consumer>
        <Posts />
      </main>
    );
  }
}

export default Application;
