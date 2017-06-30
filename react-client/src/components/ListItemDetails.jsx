import React from 'react';
import Form from './Form.jsx';

const ListItemDetails = (props) => (
  <div>
    <h2>
      website: {props.selectedCredential.website}
    </h2>
    <div>
      username: {props.selectedCredential.username}
    </div>
    <button onClick={() => props.deleteCredential(props.selectedCredential)} className="btn btn-danger deleteButton">Delete Credential</button>
    <Form shareCredentialWithUser={props.shareCredentialWithUser} selectedCredential={props.selectedCredential}/>
  </div>
)

export default ListItemDetails;