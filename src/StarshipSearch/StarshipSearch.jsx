import { useState } from 'react';

const StarshipSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(searchTerm)
    setPrevSearchTerm(searchTerm);
    setSearchTerm('');
  }

  const handleClearButton = (event) => {
      event.preventDefault();
      props.search('');
  };

  const searchQueryText = () => {
    if (!prevSearchTerm) {
      return 'Search for a starship by name';
    }
    return prevSearchTerm;
  }

  return (
    <section>
      <h2>Number of Starships Displayed: {props.numberOfStarships}</h2>
      <h2>Previous Search Query: {searchQueryText()}</h2>
      <h2>Search:</h2>
      <form onSubmit={handleSubmit}>
        <label htnmlfor='searchTerm'>Search Term:</label>
        <input
          type='text'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
        <div>
          {!prevSearchTerm ? null : 
          <button onClick={handleClearButton}>
            Show All Starships
          </button>
          }
        </div>
    </section>
  );
};

export default StarshipSearch;