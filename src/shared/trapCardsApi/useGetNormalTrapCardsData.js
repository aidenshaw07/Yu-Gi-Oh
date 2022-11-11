import axios from "axios";
import { useEffect, useState } from "react";
import { TRAP_CARDS_API_ENDPOINT } from "../apiEndpoints";

const endpoint = TRAP_CARDS_API_ENDPOINT.cards_api;
const race = "Normal";

export const useGetNormalTrapCardsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState("");

  const fetchData = async () => {
    setIsLoading(true);

    const options = {
      url: endpoint(race),
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    try {
      await axios(options).then((response) => {
        setData(response.data.data);
        setTotal(response.data.data.length);
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

  return { data, isLoading, error, total };
};
