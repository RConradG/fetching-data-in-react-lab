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

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htnmlfor='searchTerm'>Search Term:</label>
        <input
          type='text'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );



};

export default StarshipSearch;