import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';

class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response: {data: any}) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  render() {
    return <View />;
  }
}

export default App;
