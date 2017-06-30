import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.props.credential.website);
    this.props.setSelectedCredential(this.props.credential);
  }

  render() {
    let shared = this.props.credential['lender_user_id'] ? (<div><button className="shareButton btn btn-static btn-sm">SHARED</button>  {this.props.credential['lender_user_id']}</div>) : (<div></div>);
    return (
      <div>
        <a href="#" onClick={this.handleClick } className="list-group-item listItem">
            <h4 className="website">
              { this.props.credential.website }
            </h4>
            <h5>
              { this.props.userName }
            </h5>
            {shared}     
        </a>
      </div>
    );
  }
}

export default ListItem;