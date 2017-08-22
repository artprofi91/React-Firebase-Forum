import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/ThreadDisplay.jsx';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const config ={

        apiKey: "AIzaSyBKuPWKX1NqzRzcqH_2t07r6rgv_-6F4_w",
        authDomain: "react-firebase-forum.firebaseapp.com",
        databaseURL: "https://react-firebase-forum.firebaseio.com",
        projectId: "react-firebase-forum",
        storageBucket: "",
        messagingSenderId: "163867316537"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default App;