import axios from 'axios';
import databaseData from '../data/database.json';

const API_BASE_URL = 'http://localhost:9000';

export const getSubjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/courses`);
    if (response.data && response.data.length > 0) {
      return response.data;
    }
  } catch (error) {
    console.warn('API fetch failed for subjects, using local database.json fallback:', error.message);
  }
  return databaseData.courses || databaseData.subjects || [];
};
export const getAccounts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/accounts`);
    if (response.data && response.data.length > 0) {
      return response.data;
    }
  } catch (error) {
    console.warn('API fetch failed for accounts, using local database.json fallback:', error.message);
  }
  return databaseData.accounts || [];
};
export const getQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`);
    if (response.data && response.data.length > 0) {
      return response.data;
    }
  } catch (error) {
    console.warn('API fetch failed for questions, using local database.json fallback:', error.message);
  }
  return databaseData.questions || [];
};

export const deleteQuestion = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/questions/${id}`);
  } catch (error) {
    console.warn('API delete failed:', error.message);
  }
};