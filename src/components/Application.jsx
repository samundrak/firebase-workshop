import React, { Component } from 'react';
import { firestore } from '../firebase';
import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';

class Application extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const posts = await firestore.collection('posts').get();
    const docs = await posts.docs.map(collectIdsAndDocs);
    this.setState({
      posts: docs,
    });
  }
  handleRemove = async (id) => {
    const allPosts = this.state.posts;
    console.log(id);
    await firestore.doc(`posts/${id}`).delete();
    const posts = allPosts.filter((post) => post.id !== id);
    this.setState({ posts });
  };
  handleCreate = async (post) => {
    const { posts } = this.state;
    const docsRef = await firestore.collection('posts').add(post);
    const doc = await docsRef.get();

    const newPost = collectIdsAndDocs(doc);
    this.setState({ posts: [newPost, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
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
