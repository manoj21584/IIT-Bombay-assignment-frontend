import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api'; // Update to match your backend URL

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/course`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses", error);
    throw error; // Propagate error for further handling
  }
};

export const createCourse = async (course) => {
  try {
    console.log(course)
    const response = await axios.post(`${BASE_URL}/course`, course);
    return response.data;
  } catch (error) {
    console.error("Error creating course", error);
    throw error;
  }
};

export const fetchInstances = async (year, semester) => {
  try {
    const response = await axios.get(`${BASE_URL}/instance/${year}/${semester}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching instances", error);
    throw error; // Propagate error for further handling
  }
};

export const createInstance = async (instance) => {
  try {
    const response = await axios.post(`${BASE_URL}/instance`, instance);
    return response.data;
  } catch (error) {
    console.error("Error creating instance", error);
    throw error;
  }
};
// export const deleteInstance = async (id) => {
//   try {
//     await axios.delete(`${BASE_URL}/instance/${id}`);
//   } catch (error) {
//     console.error("Error deleting instance", error);
//     throw error; // Rethrow error to handle in the component
//   }
// };

export const deleteCourse = async (courseId) => {
  try {
    await axios.delete(`${BASE_URL}/course/${courseId}`);
  } catch (error) {
    console.error("Error deleting course", error);
    throw error;
  }
}
export const deleteInstance = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/course/${id}`);
    // http://localhost:3000/api/course/9
  } catch (error) {
    console.error("Error deleting instance", error);
    throw error;
  }
};
