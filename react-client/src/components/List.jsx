import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <div className="list-group">
      { props.credentials.map(credential => <ListItem key={credential.website} credential={credential} setSelectedCredential={props.setSelectedCredential}
      userName={props.userName}/>)}
    </div>
  </div>
)

export default List;