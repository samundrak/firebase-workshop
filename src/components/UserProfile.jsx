import React, { Component } from 'react';
import { storage, firestore, auth } from '../firebase';

class UserProfile extends Component {
  state = {
    displayName: '',
  };
  imageInput = null;

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`);
  }

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }
  handleSubmit = event => {
    event.preventDefault();
    const { displayName } = this.state;
    if (displayName) {
      this.userRef.update({ displayName });
    }
    if (this.file) {
      storage()
        .ref()
        .child('user-profiles')
        .child(this.uid)
        .child(this.file.name)
        .put(this.file)
        .then(response => {
          return response.ref.getDownloadURL();
        })
        .then(photoURL => this.userRef.update({ photoURL }));
    }
  };
  render() {
    const { displayName } = this.state;
    return (
      <section className="UserProfile">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={displayName}
            name="displayName"
            onChange={this.handleChange}
            placeholder="Display Name"
          />
          <input type="file" ref={ref => (this.imageInput = ref)} />
          <input type="submit" className="update" />
        </form>
      </section>
    );
  }
}
export default UserProfile;
