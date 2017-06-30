import React from 'react';

const ListItem = (props) => (
  <div className="list-group-item">
    <h4 className="website">
      { props.credential.website }
    </h4>
    <div>
      { props.credential.username }
    </div>
  </div>
)

export default ListItem;