import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SINGLE_CARD_INFORMATION_API_ENDPOINT } from "../shared/apiEndpoints";

const endpoint = SINGLE_CARD_INFORMATION_API_ENDPOINT.cards_api;

export const useGetMappedCardsInformation = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { cardId } = useParams();

  const fetchData = async () => {
    setIsLoading(true);

    const options = {
      url: endpoint(cardId),
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
    // eslint-disable-next-line
  }, []);

  return { data, isLoading, error };
};
