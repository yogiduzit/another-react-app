import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ToonList from '../components/ToonList';
import VotesSection from '../components/VotesSection';

import NotFoundPage from './NotFoundPage';

const ToonDetailPage = ({ history, match }) => {
  const id = match.params.id;

  const [toonInfo, setToonInfo] = useState({
    votes: 0,
    id: 0,
    firstName: '',
    lastName: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api4all.azurewebsites.net/api/people/${id}`);
      const body = await result.json();
      setToonInfo(body);
    }
    fetchData();
  }, [id]);

  const onDelete = async () => {
    const res = await fetch(`https://api4all.azurewebsites.net/api/people/${id}`, {
      method: "delete"
    });
    if (res.status === 200) {
      history.push("/list");
    }
  }

  if (!toonInfo) return <NotFoundPage />

  return (
    <React.Fragment>
      <h4 className="text-info">{toonInfo.id}. {toonInfo.firstName} {toonInfo.lastName}</h4>
      <p>This cartoon character has received {toonInfo.votes} votes.</p>
      <VotesSection id={id} votes={toonInfo.votes} setToonInfo={setToonInfo} /><hr/>
      <table style={{ "width": "90%", "margin": "auto" }}>
        <tbody>
          <tr>
            <td style={{ "width": "15%", "verticalAlign": "top" }}>
              <img className="rounded img-responsive pull-right img-thumbnail float-left"
                style={{ "width": "50%" }}
                src={`${toonInfo.pictureUrl}`} alt={`${toonInfo.firstName} ${toonInfo.lastName}`} />
            </td>
            <td style={{ "width": "65%", "verticalAlign": "top" }}>
              <p><b>Occupation: </b>{toonInfo.occupation}</p>
              <p><b>Gender: </b>{toonInfo.gender}</p>
              <button type="button" class="btn btn-secondary"><Link to={`/update/${id}`} className="text-white">Update</Link></button>
              <button type="button" class="btn btn-danger" onClick={onDelete}>Delete</button>
            </td>
            <td style={{ "width": "20%", "verticalAlign": "top" }}>
              <h3>Others:</h3>
              <ToonList exceptId={toonInfo.id} />
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>

  );
}
export default ToonDetailPage

