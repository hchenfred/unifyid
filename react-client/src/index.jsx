import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import exampleData from '../../exampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      credentials: []
    }
    this.processData = this.processData.bind(this);
  }


  processData(data) {
    let credentials = data['own_credentials'].concat(data['shared_with_me']);
    credentials.forEach((credential) => {
      data['shared_with_others'].forEach((sharedCredential) => {
        if (credential.website === sharedCredential.website) {
          credential = sharedCredential;
        }
      })
    });
    credentials.sort((a, b) => a.website > b.website);
    this.setState({credentials: credentials});
    console.log(credentials);


  }

  componentDidMount() {
    this.processData(exampleData);  
  }

  render () {
    return (<div className="container">
      <h1>User Name: {exampleData.username}</h1>
      <List credentials={this.state.credentials}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));