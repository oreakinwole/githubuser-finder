import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Information from './components/Information';
import { GET_REPOS } from './services/graphql';

const App = () => {
  const [termTemp, setTermTemp] = useState('');
  const [term, setTerm] = useState('');

  const { loading, error, data } = useQuery(GET_REPOS, {
    variables: {
      language: term,
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(termTemp);
  };

  const handleSetTerm = ({ target: { value } }) => {
    if (value === '') return setTermTemp('');
    setTermTemp(`language:${value}`);
  };

  return (
    <div className="container-fluid mt-3">
      <form onSubmit={handleSearch} className="mb-5">
        <input
          type="search"
          className="form-control col-md-3 d-inline mr-3 align-middle"
          placeholder="Enter Language e.g Javascript"
          onChange={handleSetTerm}
        />

        <button type="submit" className="btn btn-primary d-inline align-middle">
          Search
        </button>
      </form>

      {loading && <p>loading...</p>}
      {error && <p>error...</p>}

      {data && (
        <div className="row">
          <Information resData={data?.search?.edges || []} />
        </div>
      )}
    </div>
  );
};

export default App;
