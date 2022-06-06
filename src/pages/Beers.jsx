import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';

import { listBeers } from '../services/beersApi';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    listBeers().then((list) => {
      setBeers(list);
    });
  }, []);

  return (
    <div className="beers-cointainer">
      <HomeButton />
      {beers.map((beer) => (
        <div key={beer._id} className="beer">
          <Link to={`/single-beer/${beer._id}`}>
            <img src={beer.image_url} alt="beer" />
          </Link>
          <div className="list">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <strong>
              <h5>Created by: {beer.contributed_by}</h5>
            </strong>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beers;
