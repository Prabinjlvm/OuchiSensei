// Set the base URL for the API
import axios from 'axios';
const BASE_URL = 'https://backend.hello-lang-teacher.mydns.jp';

// Create Teacher
export async function createTeacher({ email, password, first_name, last_name, prefectures, municipality, address, mobile }) {
    const response = await axios.post(`${BASE_URL}/teacher/createTeacher`, {
        email, password, first_name, last_name, prefectures, municipality, address, mobile
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
}

// Teacher Additional Details
export async function teacherAdditionalDetails(details) {
    const formData = new FormData();
  
    // This simple loop is now correct because all values are strings or files
    for (const key in details) {
      if (details.hasOwnProperty(key) && details[key] !== null && details[key] !== undefined) {
        formData.append(key, details[key]);
      }
    }
  
    try {
      const response = await axios.post(
        `${BASE_URL}/teacher/teacherAdditionalDetails`,
        formData,
        {
          // Axios will correctly set the multipart header
        }
      );
  
      console.log('Teacher Additional Details Response:', response.data);
      return response.data;
  
    } catch (error) {
      console.error('Error submitting teacher additional details:', error.response || error);
      // Log the data that was sent for easy debugging
      console.error('Data Sent:', Object.fromEntries(formData));
      throw error;
    }
  }
  
  


// Teacher Login
export async function teacherLogin({ email, password }) {
    const response = await axios.post(`${BASE_URL}/teacher/login`, {
        email, password
    }, {
        headers: {
            'Content-Type': 'application/json',
            
        }
    });
    return response.data;
}


