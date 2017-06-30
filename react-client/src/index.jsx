import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import exampleData from '../../exampleData.js';
import ListItemDetails from './components/ListItemDetails.jsx';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      credentials: [],
      selectedCredential: {}
    }
    this.processData = this.processData.bind(this);
    this.setSelectedCredential = this.setSelectedCredential.bind(this);
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
    this.setState({credentials: credentials, selectedCredential: credentials[0]});
    console.log(credentials);
  }

  componentDidMount() {
    this.processData(exampleData);  
  }

  setSelectedCredential(credential) {
    this.setState({selectedCredential: credential});
  }

  render () {
    return (<div className="container">
      <h1>User Name: {exampleData.username}</h1>
      <div className="row">
        <div className="col-md-4">
          <List setSelectedCredential={this.setSelectedCredential} credentials={this.state.credentials}/>
        </div>
        <div className="col-md-8">
          <ListItemDetails selectedCredential={this.state.selectedCredential}/>
        </div>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));