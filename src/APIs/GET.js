import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://133.18.163.204:4005',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  export const getAllTeachers = async (page, limit) => {
    try {
      const response = await axiosInstance.get('/teacher/getAllTeachers', {
        params: { page, limit }
      });
      console.log('Teachers fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching teachers:', error);
      throw error;
    }
  };

  export const getAllMuncipalities = async () => {
    try {
      const response = await axiosInstance.get('/city/municipalities');
      console.log('Muncipalities  fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching teachers:', error);
      throw error;
    }
  };

  getAllMuncipalities();

  export const getAllPrefectures = async () => {
    try {
      const response = await axiosInstance.get('/city/prefectures');
      console.log('Prefectures  fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching teachers:', error);
      throw error;
    }
  };

  getAllPrefectures();
