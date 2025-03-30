import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ displayedStarships }) => {

  // const starshipsList = starshipsData.map((starship, index) =>
  //   <StarshipCard starship={starship} index={index} />
  // )
  return (
    <div className='starshipList'>
      <h2>Starships</h2>
      <ul>
        <StarshipCard displayedStarships={displayedStarships} />
      </ul>
    </div>
  );
};

export default StarshipList;
