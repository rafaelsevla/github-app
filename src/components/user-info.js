'use strict';

import React from 'react';

const UserInfo = () => (
  <div className="user-info">
    <img src="https://avatars3.githubusercontent.com/u/38443896?v=4" />
    <h1 className="username">
      <a href="https://github.com/rafaelsevla">Rafael Costa</a>
    </h1>
    <ul className="repos-info">
      <li>Repositórios: 122</li>
      <li>Seguidores: 17</li>
      <li>Seguindo: 57</li>
    </ul>
  </div>
);

export default UserInfo;
