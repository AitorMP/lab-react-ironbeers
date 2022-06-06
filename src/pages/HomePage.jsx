import { Link } from 'react-router-dom';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Iron Beers</h1>

      <div>
        <img src="./../assets/beers.png" alt="beers" />
        <Link to="/beers">
          <h2>All beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          deserunt vitae facere porro eius sed. Exercitationem repudiandae
          deserunt, reprehenderit expedita impedit optio recusandae. Repellat ad
          tempora animi obcaecati! Eligendi, esse!
        </p>
      </div>

      <div>
        <img src="./../assets/random-beer.png" alt="random beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          optio labore beatae dolores voluptas praesentium amet. Pariatur
          officiis neque deleniti facilis molestias, tempora quasi in
          voluptatibus, provident ducimus, ipsum quos?
        </p>
      </div>

      <div>
        <img src="./../assets/new-beer.png" alt="new beer" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto
          voluptatem aut qui sequi eaque odio deserunt atque doloribus, illum
          consequatur debitis accusamus, vel rem quaerat fuga rerum dicta quia.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
