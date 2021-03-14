import React from 'react';
import { Link } from 'react-router-dom';
import toons from '../data/toons';

const ToonList = (param) => {
  var others = toons;
  if (param !== undefined) {
    others = toons.filter(p => p.id !== param.exceptId);
  }


  return (
    <>
      {others.map((person, key) => (
        <Link key={key} to={`/detail/${person.id}`}>
          <h6>{person.id} {person.firstName} {person.lastName}</h6>
        </Link>
      ))}
    </>
  )
}

export default ToonList; 
