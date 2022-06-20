import { useLocation, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchShows } from '../services/tmdb-api';
import TitleList from '../components/TitleList';
import styles from "./Search.module.css";

const SearchPage = ({ watchList, toggle }) => {
  const [titles, setTitles] = useState(null);
  
  const location = useLocation();
  let navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const query = params.get('query');
  const page = params.get("page");

  const [currentPage, setCurrentPage] = useState(page);
  let showsOnPage = titles != null ? titles.length : ""; 
 

  useEffect(() => {
    if (query) {
      searchShows(query, currentPage)
        .then((titles) => setTitles(titles))
        .then(navigate({ pathname: "/search", search: `query=${query}&page=${currentPage}`}))
    }
  }, [query, currentPage]);


  const handleNext = () => {
    setCurrentPage((prevState) => parseInt(prevState) + 1)
  }

  const handlePrev = () => {
    setCurrentPage((prevState) => parseInt(prevState) - 1)
  }


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
      {currentPage != 1 ? <button onClick={handlePrev} className={styles.pagination}>Previous</button> : ""}
      {showsOnPage === 20 ? <button onClick={handleNext} className={styles.pagination}>Next</button> 
      : <h2>End of Results</h2> }
    </>
  );
};

export default SearchPage;

