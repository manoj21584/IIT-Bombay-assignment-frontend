import { useState } from "react";
import { createCourse } from "../api/api";

const CourseForm = () => {
  const [course, setCourse] = useState({
    title: "",
    courseCode: "",
    description: "",
  });

  const [error, setError] = useState(null); // To handle and display errors

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(course);
      alert("Course created successfully!");
      setCourse({ title: "", courseCode: "", description: "" });
    } catch (err) {
      console.error("Error creating course", err);
      setError("Failed to create course. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          name="title"
          value={course.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Course Code</label>
        <input
          name="courseCode"
          value={course.courseCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Add Course</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default CourseForm;
