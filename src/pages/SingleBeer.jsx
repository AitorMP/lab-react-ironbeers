import React, { useEffect, useState } from 'react';
import HomeButton from '../components/HomeButton';
import { useParams } from 'react-router-dom';
import { loadBeer } from '../services/beersApi';

const SingleBeer = () => {
  const [singleBeer, setSingleBeer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadBeer(id).then((data) => {
      setSingleBeer(data);
    });
  }, [id]);

  return (
    <div>
      <HomeButton />
      <img src={singleBeer.image_url} alt="beer" />
      <div className="singleBeerList">
        <h1>{singleBeer.name}</h1>
        <h3>{singleBeer.tagline}</h3>
        <h4>{singleBeer.first_brewed}</h4>
        <p>{singleBeer.description}</p>
        <small>{singleBeer.contributed_by}</small>
        <hr />
      </div>
    </div>
  );
};

export default SingleBeer;
