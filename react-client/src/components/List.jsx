import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    { props.credentials.map(credential => <ListItem key={credential.website} credential={credential}/>)}
  </div>
)

export default List;