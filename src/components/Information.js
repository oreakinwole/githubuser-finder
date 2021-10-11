import React from 'react';

const Information = ({ resData }) => {
  return (
    <div className="">
      {resData.map((cur) => (
        <>
          <h2>
            <span>Name:</span> {cur.node.name}
          </h2>
          <p>
            <span>Description:</span> {cur.node.description}
          </p>

         <div className="d-flex">

         {cur.node.assignableUsers.edges.map((cur) => (
            <div className="d-inline">
                <div className="card" style={{ width: '10rem' }}>
              <img
                className="card-img-top"
                src={cur.node.avatarUrl}
                alt="Avatar"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="card-body">
                <h5 className="card-title">{cur.node.name}</h5>
                <p className="card-text">{cur.node.email}</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={cur.node.avatarUrl}
                  className="btn btn-primary"
                >
                  See full Image
                </a>
              </div>
            </div>
            </div>
          ))}
         </div>
        </>
      ))}
    </div>
  );
};

export default Information;
