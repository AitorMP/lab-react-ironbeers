import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <header>
      <Link to="/">
        <img src="./../assets/header.png" alt="header" />
      </Link>
    </header>
  );
};

export default HomeButton;
