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