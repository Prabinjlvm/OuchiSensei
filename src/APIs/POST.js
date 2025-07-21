// Set the base URL for the API
import axios from 'axios';
const BASE_URL = 'http://133.18.163.204:4005';

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
    const response = await axios.post(`${BASE_URL}/teacher/teacherAdditionalDetails`, details, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
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
