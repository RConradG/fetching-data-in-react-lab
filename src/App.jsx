import { useState } from 'react';
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import StarshipList from './StarshipList/StarshipList';
import StarshipSearch from './StarshipSearch/StarshipSearch';

import './App.css';

const App = () => {

  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  return (
    <h1>Hello world!</h1>
  );
}

export default App
