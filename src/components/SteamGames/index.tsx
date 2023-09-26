import { useEffect, useState } from "react";
import styles from "./steamGames.module.scss";

type Game = {
  title: string;
  thumb: string;
  dealID: string;
  salePrice: string;
};

const gameLink: string = "https://www.cheapshark.com/redirect?dealID=";

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGameIndex, setSelectedGameIndex] = useState<number | null>(null);

  const API_URL: string =
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

  const getGames = async (url: string) => {
    try {
      const response: any = await fetch(url);
      const data: any = await response.json();
      console.log(data);

      const newGames: Game[] = data.map((gameData: any) => ({
        title: gameData.title,
        thumb: gameData.thumb,
        dealID: gameData.dealID,
        salePrice: gameData.salePrice,
      }));

      setGames(newGames);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getGames(API_URL);
  }, []);

  const handleRandomGameClick = () => {
    if (games.length > 0) {
      const randomIndex = Math.floor(Math.random() * games.length);
      setSelectedGameIndex(randomIndex);
    }
  };

  return (
    <div className={styles.games}>
      <div className={styles["games__container"]}>
      {selectedGameIndex !== null && (
        <a href={gameLink + games[selectedGameIndex].dealID}>
          <div className={styles.gameCard} key={games[selectedGameIndex].dealID}>
            <p className={styles["gameCard__title"]}>
              {games[selectedGameIndex].title}
            </p>
            <img
              className={styles["gameCard__img"]}
              src={games[selectedGameIndex].thumb}
              alt={"thumb of " + games[selectedGameIndex].title}
            />
            <p className={styles["gameCard__price"]}>
              Sale price: {games[selectedGameIndex].salePrice}€
            </p>
          </div>
        </a>
      )}
      </div>
      <button className={styles["games__callGameButton"]} onClick={handleRandomGameClick}>Random Game</button>
    </div>
  );
};

export default Games;
