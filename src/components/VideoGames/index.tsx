import { useEffect, useState } from "react";
import styles from "./videoGames.module.scss";

type Game = {
  title: string;
  thumb: string;
  dealID: string;
  salePrice: string;
};

const gameLink: string = "https://www.cheapshark.com/redirect?dealID=";

const Games = ({ userInput }: { userInput: string }) => {
  const [games, setGames] = useState<Game[]>([]);

  const API_URL: string = `https://www.cheapshark.com/api/1.0/deals?storeID=${userInput}&upperPrice=15`;

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
  }, [API_URL, userInput]);

  console.log(API_URL);

  return (
    <>
      {games.map((game: Game) => (
        <div className={styles.gameCard} key={game.dealID}>
          <p className={styles["gameCard__title"]}>{game.title}</p>

          <img
            className={styles["gameCard__img"]}
            src={game.thumb}
            alt={"thumb of " + game.title}
          />
          <div>
            <p className={styles["gameCard__price"]}>Price: {game.salePrice}</p>
            <a className={styles.link} href={gameLink + game.dealID}>
              To Store Page
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Games;