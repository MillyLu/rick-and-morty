import axios from "axios";

export const getAllCharacters = async (filters) => {
  const { name, status, type, gender, species } = filters;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`
  );
  return response.data;
};
