import React, { useState } from 'react';

const App = () => {
  const [term, setTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(term);
  };

  const handleSetTerm = ({ target: { value } }) => setTerm(value);

  return (
    <div className="container-fluid">
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="search"
            className="form-control"
            placeholder="Enter search term"
            onChange={handleSetTerm}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled="false">
          Search
        </button>
      </form>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">Hii</div>
          <div className="col-md-3">Hii</div>
          <div className="col-md-3">Hii</div>
          <div className="col-md-3">Hii</div>
        </div>
      </div>
    </div>
  );
};

export default App;
