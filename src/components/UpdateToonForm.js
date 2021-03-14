import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateToonForm = () => {
  const { id } = useParams();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [gender, setGender] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [pictureUrls, setPictureUrls] = useState([]);

  const updateToon = async () => {
    const res = await fetch(`https://api4all.azurewebsites.net/api/people/${id}`, {
      method: 'put',
      body: JSON.stringify({
        id,
        firstName,
        lastName,
        occupation,
        gender,
        pictureUrl
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });
    if (res.status === 204) {
      history.push(`/detail/${id}`);
    }
  }

  useEffect(() => {
    const loadPictures = async () => {
      const res = await fetch(`https://api4all.azurewebsites.net/api/pictures/`);
      const urls = await res.json();
      setPictureUrls(urls);
    }
    loadPictures();
  }, []);

  useEffect(() => {
    const loadToon = async () => {
      const res = await fetch(`https://api4all.azurewebsites.net/api/people/${id}`);
      const toon = await res.json();

      setFirstName(toon.firstName);
      setGender(toon.gender);
      setLastName(toon.lastName);
      setOccupation(toon.occupation);
      setPictureUrl(toon.pictureUrl);
    };
    loadToon();
  }, [id])

  if (pictureUrls.length === 0 || !(pictureUrl)) {
    return <React.Fragment>Loading...</React.Fragment>
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
          <select value={pictureUrl} onChange={(event) => setPictureUrl(event.target.value)}>
            {
              pictureUrls.map((pictureUrl) => 
                <option value={pictureUrl.url}>{pictureUrl.name}</option>
              )
            }
          </select>
        </div>

        <button onClick={() => updateToon()} className="btn btn-success" >Update</button>
    </div>
  </React.Fragment>
  )
};

export default UpdateToonForm;