import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchShows } from '../services/tmdb-api';
import TitleList from '../components/TitleList';

const SearchPage = ({ watchList, toggle }) => {
  const [titles, setTitles] = useState(null);
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get('query');
  
  const pageParam = new URLSearchParams(location.page);
  const page = params.get("page");



  useEffect(() => {
    if (query) {
      searchShows(query, page).then((titles) => setTitles(titles));
    }
  }, [query]);

  return (
    <>
      {titles ? (
        <TitleList
          name={`shows matching your search: "${query}"`}
          titles={titles}
          watchList={watchList}
          toggle={toggle}
        />
      ) : (
        <h2>No matching results</h2>
      )}
      {/* <Pagination/> */}
    </>
  );
};

export default SearchPage;
