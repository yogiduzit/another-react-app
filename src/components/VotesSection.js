import React from 'react';

const VotesSection = ({ id, votes, setToonInfo }) => {
  const voteToon = async () => {
    const result = await fetch(`https://api4all.azurewebsites.net/api/people/${id}/vote`, {
      method: 'post',
    });

    const body = await result.json();
    setToonInfo(body);
  }

  return (
    <React.Fragment>
      <div className="panel panel-default">
        <button onClick={() => voteToon()} className="btn btn-success btn-sm">Add Vote</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-info">This cartoon character has received  {votes} votes.</span>
      </div>
    </React.Fragment>
  );
}

export default VotesSection;