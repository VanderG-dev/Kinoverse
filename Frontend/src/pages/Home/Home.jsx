import Header from "../../layout/Header/Header.jsx";
import Wave from "../../components/elements/Wave/Wave.jsx";

import bluebg from "../../assets/images/company-bg.png";

import styles from "./Home.module.css";

function HomePage() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="flex justify-center bg-main pt-10 pb-10"></div>
        <Wave reversed={true} />
        <div className="relative">
          <img src={bluebg} className={styles.company_background} />
          <div className={styles.black_overflow}></div>
        </div>
        <Wave reversed={false} />
        <Wave reversed={true} />
      </main>
    </>
  );
}

export default HomePage;
