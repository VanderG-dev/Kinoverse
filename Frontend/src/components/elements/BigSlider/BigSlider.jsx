import styles from "./BigSlider.module.css";

function BigSlider() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_KEY,
    },
  };

  fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <>
      <div></div>
    </>
  );
}
export default BigSlider;
