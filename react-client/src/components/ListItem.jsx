import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.credential.website);
    this.props.setSelectedCredential(this.props.credential);
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.handleClick } className="list-group-item listItem">
            <h4 className="website">
              { this.props.credential.website }
            </h4>
            <div>
              { this.props.credential.username }
            </div>
        </a>
      </div>
    );
  }
}

export default ListItem;