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
      selectedCredential: {},
      userName: ''
    }
    this.processData = this.processData.bind(this);
    this.setSelectedCredential = this.setSelectedCredential.bind(this);
    this.deleteCredential = this.deleteCredential.bind(this);
    this.shareCredentialWithUser = this.shareCredentialWithUser.bind(this);
  }


  processData(data) {
    let credentials = data['own_credentials'].concat(data['shared_with_me']);
    credentials.forEach((credential, i) => {
      data['shared_with_others'].forEach((sharedCredential) => {
        if (credential.website === sharedCredential.website) {
          credentials[i] = sharedCredential;
        }
      })
    });
    credentials.sort((a, b) => a.website > b.website);
    this.setState({credentials: credentials, selectedCredential: credentials[0], userName: exampleData.username});
    console.log(credentials);
  }

  componentDidMount() {
    this.processData(exampleData);  
  }

  setSelectedCredential(credential) {
    this.setState({selectedCredential: credential});
  }

  deleteCredential(credentialToBeDeleted) {
    let tempCredentials = this.state.credentials.filter(credential => credential.website !== credentialToBeDeleted.website);
    this.setState({ credentials: tempCredentials });
  }
  
  shareCredentialWithUser(unifyId, credential) {
    console.log(unifyId, credential);
    let tempCredentials = this.state.credentials;
    tempCredentials.forEach((credential, i) => {
      if (credential.website === credential.website) {
        tempCredentials[i]['borrower_user_id'] = unifyId;
      }
    });
    this.setState({credentials: tempCredentials});
  }

  render() {
    return (<div className="container">
      <h1>User Name: {exampleData.username}</h1>
      <div className="row">
        <div className="col-md-4">
          <List setSelectedCredential={this.setSelectedCredential} credentials={this.state.credentials} userName={this.state.userName}/>
        </div>
        <div className="col-md-8">
          <ListItemDetails deleteCredential={this.deleteCredential} selectedCredential={this.state.selectedCredential}
          shareCredentialWithUser={this.shareCredentialWithUser}/>
        </div>
      </div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));