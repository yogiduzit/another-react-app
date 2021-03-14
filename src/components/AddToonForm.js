import React, { useState, useEffect } from 'react';

const AddToonForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [gender, setGender] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  const addToon = async () => {
    const result = await fetch(`https://api4all.azurewebsites.net/api/people/`, {
      method: 'post',
      body: JSON.stringify({
        firstName,
        lastName,
        occupation,
        gender,
        pictureUrl
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setFirstName("")
    setLastName("")
    setOccupation("")
    setGender("")
    setPictureUrl("")
  }

  return (<React.Fragment>
    <div className="panel panel-default">
        <h3>Add toon character</h3>
        <div className="form-group">
          <label>First Name:</label>
          <input className="form-control" type="text" placeholder="First Name"
            value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input className="form-control" type="text" placeholder="Last Name"
            value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Occupation:</label>
          <input className="form-control" type="text" placeholder="Occupation"
            value={occupation} onChange={(event) => setOccupation(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input className="form-control" type="text" placeholder="Gender"
            value={gender} onChange={(event) => setGender(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Picture URL:</label>
          <input className="form-control" type="text" placeholder="Picture URL"
            value={pictureUrl} onChange={(event) => setPictureUrl(event.target.value)} />
        </div>

        <button onClick={() => addToon()} className="btn btn-success" >Add</button>
    </div>
  </React.Fragment>
  )
}

export default AddToonForm;