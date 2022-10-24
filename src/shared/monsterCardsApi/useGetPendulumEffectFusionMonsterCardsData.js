import axios from "axios";
import { useEffect, useState } from "react";
import { MONSTER_CARDS_API_ENDPOINT } from "../monsterCardsEndpoint";

const endpoint = MONSTER_CARDS_API_ENDPOINT.cards_api;
const type = "Pendulum Effect Fusion Monster";

export const useGetPendulumEffectFusionMonsterCardsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    const options = {
      url: endpoint(type),
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    try {
      await axios(options).then((response) => {
        setData(response.data.data);
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  return { data, isLoading, error };
};
