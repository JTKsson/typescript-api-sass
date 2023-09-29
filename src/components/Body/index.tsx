import { useState } from "react";
import Games from "../VideoGames";
import styles from "./body.module.scss";

const Body = () => {
  const [storeFilter, setStoreFilter] = useState("");

  const handleStoreChange = (priceFilter: string) => {
    setStoreFilter(priceFilter);
  };

  return (
    <div className={styles.bodyContainer}>
      <div className={styles["bodyContainer__header"]}>
        <div className={styles["bodyContainer__header__title"]}>
          <h1 className={styles["bodyContainer__header__title--h1"]}>Game Deals</h1>
          <p className={styles["bodyContainer__header__title--p"]}>Choose a store an enjoy!</p>
        </div>
        <div className={styles["bodyContainer__header__buttons"]}>
          <button
            className={styles.storeButton}
            onClick={() => handleStoreChange("1")}
          >
            Steam
          </button>
          <button
            className={styles.storeButton}
            onClick={() => handleStoreChange("7")}
          >
            GoG
          </button>
          <button
            className={styles.storeButton}
            onClick={() => handleStoreChange("8")}
          >
            Origin
          </button>
        </div>
      </div>
      <div className={styles["bodyContainer__gameList"]}>
        <Games userInput={storeFilter} />
      </div>
    </div>
  );
};

export default Body;
