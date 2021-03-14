import React from 'react';

import toons from '../data/toons';

import ToonList from '../components/ToonList';
import NotFoundPage from './NotFoundPage';

const ToonDetailPage = ({ match }) => {
  const id = match.params.id;

  const person = toons.find(
    data => data.id === Number(id)
  );
  if (!person) return <NotFoundPage />

  return (
    <React.Fragment>
      <h4 className="text-info">{person.id}. {person.firstName} {person.lastName}</h4>
      <table style={{ "width": "90%", "margin": "auto" }}>
        <tbody>
          <tr>
            <td style={{ "width": "15%", "verticalAlign": "top" }}>
              <img className="rounded img-responsive pull-right img-thumbnail float-left"
                style={{ "width": "50%" }}
                src={`${person.pictureUrl}`} alt={`${person.firstName} ${person.lastName}`} />
            </td>
            <td style={{ "width": "65%", "verticalAlign": "top" }}>
              <p><b>Occupation: </b>{person.occupation}</p>
              <p><b>Gender: </b>{person.gender}</p>
            </td>
            <td style={{ "width": "20%", "verticalAlign": "top" }}>
              <h3>Others:</h3>
              <ToonList exceptId={person.id} />
            </td>

          </tr>
        </tbody>
      </table>

    </React.Fragment>
  );
}
export default ToonDetailPage

