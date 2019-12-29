import React from 'react';

import { attributes, react as HomeContent } from '../content/home.md';
import '../styles/main.scss';

const { title, cats } = attributes;

const Home = () => (
  <article>
    <h1>{title}</h1>
    <HomeContent />
    <ul>
      {cats.map((cat, k) => (
        <li key={k}>
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>
        </li>
      ))}
    </ul>
  </article>
);

export default Home;
