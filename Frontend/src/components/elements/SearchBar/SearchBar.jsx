import styles from "./SearchBar.module.css";

function SearchBar() {
  //const apiKey = process.env.REACT_APP_TMDB_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTFhNjM5NmJjOTBlN2FiNzczZjY3N2Y2MzQ1NzU2OCIsIm5iZiI6MTcyODYwMjM0NC40MzI2MTksInN1YiI6IjY1YjBiNTM0OTljOTY0MDE1MTFmMmFjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_ICaXkomXe0bsRlSmU64ncGmYqGOCVeJ1LRNYPwxSQ",
    },
  };

  fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  fetch();

  return (
    <>
      <input type="text" className={styles.input} />
    </>
  );
}
export default SearchBar;
