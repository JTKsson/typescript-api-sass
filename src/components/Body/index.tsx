import Games from "../SteamGames";
import styles from "./body.module.scss";
import Footer from "../Footer";

const Body = () => {
  return (
   <div className={styles.bodyContainer}>
    <div className={styles["bodyContainer__leftSide"]}>
      <h1 className={styles["bodyContainer__leftSide__title"]}>Steam Deals</h1>
      <Footer/>
    </div>
    <Games/>
   </div>
  );
};

export default Body