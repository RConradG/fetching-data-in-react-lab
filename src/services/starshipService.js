const BASE_URL = `https://swapi.info/api/starships`;

const showStarshipList = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error('Failed to fetch starships.')
    }
    const data = await res.json();
      return data;
  } catch (error) {
    console.error('Error fetching starships:', error);
    return [];
  }
};

export { showStarshipList };