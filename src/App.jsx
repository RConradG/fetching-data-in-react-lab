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
  let numberOfStarships = displayedStarships.length;

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

    // searches starships list for any matches user enters
    const search =  (starshipToFind) => {
      const filteredStarships =  starshipsData.filter(starship => 
        starship.name.toLowerCase().includes(starshipToFind.toLowerCase())
      );

      if (!filteredStarships) {
        console.log('Starship not found');
        return 'Starship not found'
      } 
      setDisplayedStarships(filteredStarships);
      numberOfStarships = displayedStarships.length;
    }

  return (
    <>
      <h1>Starships</h1>
      <StarshipSearch search = { search } numberOfStarships={numberOfStarships} />
      <StarshipList displayedStarships={ displayedStarships } />
    </>
  );
}

export default App
                                                                              