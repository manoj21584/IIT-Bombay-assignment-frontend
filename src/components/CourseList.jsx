import { useState, useEffect } from "react";
import { fetchCourses, deleteCourse } from "../api/api";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };
    getCourses();
  }, []);

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(courseId);
        setCourses(courses.filter((course) => course.id !== courseId));
        alert("Course deleted successfully!");
      } catch (error) {
        alert("Failed to delete course. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>List Courses</h2>

      {courses.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Course Code</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.courseCode}</td>
                <td>{course.description || "No description available"}</td>
                <td>
                  <button onClick={() => handleDelete(course.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
};

export default CourseList;
