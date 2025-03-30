import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import StarshipList from './StarshipList/StarshipList';
import StarshipSearch from './StarshipSearch/StarshipSearch';
import * as starshipService from './services/starshipService';

import './App.css';

const App = () => {

  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  useEffect( () => {
    const fetchDefaultData = async () => {
      const data = await starshipService.showStarshipList();
      const newStarshipsData = data.map(starship => ({
        name: starship.name,
        starshipClass: starship.starship_class,
        manufacturer: starship.manufacturer,
        model: starship.model,
      }));
      setStarshipsData(newStarshipsData);
      setDisplayedStarships(newStarshipsData);
      console.log(newStarshipsData);
      console.log(displayedStarships);
      };
      
      fetchDefaultData();
      
    }, []);

  return (
    <>
      <h1>Starships</h1>
      <StarshipList starshipsData={ starshipsData }/>
    </>
  );
}

export default App
