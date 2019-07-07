'use strict';

import React from 'react';

const Repos = ({ title, className, repos }) => (
  <div className={className}>
    <h2>{title}:</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Repos.defaultProps = {
  className: '',
  title: ''
};

Repos.propTypes = {
  className: React.propTypes.string,
  title: React.propTypes.string.isRequired,
  repos: React.propTypes.array
};

export default Repos;
