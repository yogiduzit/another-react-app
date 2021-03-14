import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToonList = (param) => {
  const [toonInfo, setToonInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api4all.azurewebsites.net/api/people/`);
      const body = await result.json();
      setToonInfo(body);
    }
    fetchData();
  }, []);

  var others = toonInfo;

  if (param !== undefined) {
    others = Object.values(toonInfo).filter(p => p.id !== +param.exceptId);
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
