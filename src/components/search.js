'use strict';

import React, { PropTypes } from 'react';

const Search = ({ isDisabled, handleSearch }) => (
  <div className="search">
    <input
      disabled={isDisabled}
      type="search"
      placeholder="Digite o nome do usuário no GitHub"
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Search;
