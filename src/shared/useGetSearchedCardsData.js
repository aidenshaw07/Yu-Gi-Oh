import axios from "axios";
import { useEffect, useState } from "react";
import { SEARCH_CARDS_API_ENDPOINT } from "../shared/apiEndpoints";
import { useStore } from "../zustand/Store";

const endpoint = SEARCH_CARDS_API_ENDPOINT.cards_api;

export const useGetSearchedCardsData = () => {
  const state = useStore((cardName) => cardName);
  const name = state.searchedCardName;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    const options = {
      url: endpoint(name),
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
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, isLoading, error };
};
