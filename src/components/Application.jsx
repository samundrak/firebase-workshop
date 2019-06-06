import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Posts from './Posts';
import Authentication from './Authentication';
import { UserContext } from '../providers/UserProvider';
import UserProfile from './UserProfile';
import PostPage from './PostPage';

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
        <Link to="/">Home</Link>
        <UserContext.Consumer>
          {user => {
            return <Authentication user={user} />;
          }}
        </UserContext.Consumer>

        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
      </main>
    );
  }
}

export default Application;
