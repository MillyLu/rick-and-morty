/* eslint-disable max-len */
import axios from 'axios';

export const getAllCharacters = async (filters) => {
  const { name, status, type, gender, species, page } = filters;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getCharacterById = async (id) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.data;
};
