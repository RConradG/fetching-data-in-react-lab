const StarshipCard = ({ displayedStarships }) => {
  return (
    <>
      {displayedStarships.map((starship, index) => (
        <li key={index} className='card'>
          <h3>{starship.name}</h3>
          <p>Class: {starship.starship_class}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Model: {starship.model}</p>
        </li>
      ))}
    </>
  );
};

export default StarshipCard;