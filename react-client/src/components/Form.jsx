import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {unifyID: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({unifyId: e.target.value});
  }

  handleSubmitForm(e) {
    e.preventDefault();
    this.props.shareCredentialWithUser(this.state.unifyId, this.props.selectedCredential);
  }

  render() {
    return (<div className="container-fluid">
      <form onSubmit={this.handleSubmitForm} className="myForm">
        <div className="row">
        <div className="form-group">
          <input onChange={this.handleInputChange} className="form-control formInput" type="text" placeholder="Enter UnifyID to share this credential" required/>
        </div>
        <div className="form-group">
          <input className="btn btn-info formInput submitBtn btn-block" type="submit" value="ADD"/>
        </div>
        </div>
      </form>
    </div>);
  }
}

export default Form;