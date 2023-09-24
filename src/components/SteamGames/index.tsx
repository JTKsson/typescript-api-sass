import { useEffect, useState } from "react";

type Game = {
  title: string,
  thumb: string,
  dealID: string
}

const gameLink:string = "https://www.cheapshark.com/redirect?dealID="

const Games = () => {

  const [games, setGames] = useState<Game[]>([])

  const API_URL: string = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

  const getGames = async (url: string) => {
    try {
      const response: any = await fetch(url);
      const data: any = await response.json();
      console.log(data);

      // Assuming data is an array of games, you can push each game into the existing array
      const newGames: Game[] = data.map((gameData: any) => ({
        title: gameData.title,
        thumb: gameData.thumb,
        dealID: gameData.dealID,
      }));

      setGames((prevGames) => [...prevGames, ...newGames]);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getGames(API_URL);
  }, []);

  return (
      <div>
        {games.map((game: Game) => (
          <div key={game.dealID}>
            <h3>{game.title}</h3>
            <img src={game.thumb} alt="image" />
            <a href={gameLink + game.dealID}>Go to store page</a>
          </div>
        ))}
      </div>
  )
}

export default Games;