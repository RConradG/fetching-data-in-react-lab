const BASE_URL = `https://swapi.info/api/starships`;

const showStarshipList = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error('Failed to fetch starships.')
    }
    
    const data = await res.json();
    console.log('Data:', data);
      // .then((res) => res.json)
      // .then((json) => console.log(json))
      // .catch((error) => console.error(error));
      return data;
    
  } catch (error) {
    console.error(error);
  }
};

showStarshipList();