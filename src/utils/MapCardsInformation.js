import { useParams } from "react-router-dom";
import { useGetMappedCardsInformation } from "../shared/useGetMappedCardsInformation";

const MapCardsInformation = () => {
  const { data, isLoading, error } = useGetMappedCardsInformation();

  return <div>{data[0]?.name}</div>;
};

export default MapCardsInformation;
