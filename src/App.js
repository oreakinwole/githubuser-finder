import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const REPOS_QUERY = gql`
  {
    search(type: REPOSITORY, query: "language:JavaScript", last: 5) {
      edges {
        node {
          __typename
        }
      }
    }
  }
`;

const App = () => {
  const [term, setTerm] = useState('');
  const {loading, error, data} = useQuery(REPOS_QUERY);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(term);
  };

  const handleSetTerm = ({ target: { value } }) => setTerm(value);

  if (data) console.log(data)
  if (error) console.log(error.message)

  return (
    <div className="container-fluid mt-3">
      <form onSubmit={handleSearch} className="mb-5">
        <input
          type="search"
          className="form-control col-md-3 d-inline mr-3 align-middle"
          placeholder="Enter search term"
          onChange={handleSetTerm}
        />

        <button type="submit" className="btn btn-primary d-inline align-middle">
          Search
        </button>
      </form>

      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      <div className="row">
        <div className="col-md-3">Name: </div>
        <div className="col-md-3">Hii: </div>
        <div className="col-md-3">Hii: </div>
        <div className="col-md-3">Hii: </div>
      </div>
    </div>
  );
};

export default App;
