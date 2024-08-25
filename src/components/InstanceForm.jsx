import { useState, useEffect } from "react";
import { fetchCourses, createInstance } from "../api/api";

const InstanceForm = () => {
  const [courses, setCourses] = useState([]);
  const [instance, setInstance] = useState({
    year: "",
    semester: "",
    courseId: "",
  });

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };
    getCourses();
  }, []);

  const handleChange = (e) => {
    setInstance({ ...instance, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const instanceData = {
      ...instance,
      course: courses.find(
        (course) => course.id === parseInt(instance.courseId)
      ),
    };
    await createInstance(instanceData);
    alert("Instance created successfully!");
    setInstance({ year: "", semester: "", courseId: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Year</label>
        <input name="year" value={instance.year} onChange={handleChange} />
      </div>
      <div>
        <label>Semester</label>
        <input
          name="semester"
          value={instance.semester}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Course</label>
        <select
          name="courseId"
          value={instance.courseId}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Instance</button>
    </form>
  );
};

export default InstanceForm;
