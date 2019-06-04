import React, { Component } from 'react';
import { firestore, auth } from '../firebase';
import Posts from './Posts';
import Authentication from './Authentication';
import { collectIdsAndDocs } from '../utilities';

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFireStore = null;
  unsubscribeFromAuth = null;

  async componentDidMount() {
    this.unsubscribeFromFireStore = firestore
      .collection('posts')
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({
          posts,
        });
      });
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromFireStore();
  }

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </main>
    );
  }
}

export default Application;
