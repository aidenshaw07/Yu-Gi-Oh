// import axios from "axios";
// import { useState, useEffect } from "react";

// const useApiCalls = () => {

  // const [trapCardData, setTrapCardData] = useState([]);
  // const [effectMonsterData, setEffectMonsterData] = useState([]);

  // const getTrapCardData = () => {
  //   axios
  //     .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Trap Card")
  //     .then((response) => {
  //       setTrapCardData(response.data.data);
  //     });
  // };
  // console.log(trapCardData);

  // const getEffectMonsterData = () => {
  //   axios
  //     .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Effect Monster")
  //     .then((response) => {
  //       setEffectMonsterData(response.data.data);
  //     });
  // };


  // useEffect(() => {
  //   getTrapCardData();
  //   getEffectMonsterData();
  // }, []);
  // return { trapCardData, effectMonsterData };
// };

// export default useApiCalls;
