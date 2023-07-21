import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

const useGetCharacter = () => {
  const [caractersList, setCaractersList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/people`)
      .then((response) => {
        setCaractersList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return caractersList;
};
export default useGetCharacter;
