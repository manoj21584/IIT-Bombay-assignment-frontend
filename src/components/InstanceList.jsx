import React, { useState } from "react";
import { fetchInstances, deleteInstance } from "../api/api"; // Ensure deleteInstance is correctly exported from api.js

const InstanceList = () => {
  const [instances, setInstances] = useState([]);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchInstances(year, semester); // Fetch instances
      setInstances(data);
    } catch (error) {
      console.error("Failed to fetch instances:", error);
      setInstances([]); // Clear instances on error
    }
  };

  const handleDelete = async (instanceId, courseId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this instance and its associated course?"
    );
    if (confirmed) {
      try {
        // Ensure courseId is valid before calling deleteInstance
        if (!instanceId) {
          console.error("Course ID is not defined");
          return;
        }

        // Delete the instance
        await deleteInstance(instanceId);

        // Update state to remove the deleted instance
        setInstances(
          instances.filter((instance) => instance.id !== instanceId)
        );
      } catch (error) {
        console.error("Failed to delete instance or course:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter year"
            required
          />
        </div>
        <div>
          <label>Semester</label>
          <input
            type="number"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            placeholder="Enter semester"
            required
          />
        </div>
        <button type="submit">List Instances</button>
      </form>

      {instances.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Title</th>
              <th>Year/Sem</th>
              <th>Course Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {instances.map((instance) => (
              <tr key={instance.id}>
                <td>{instance.id}</td>
                <td>{instance.title}</td>
                <td>
                  {year}-{semester}
                </td>
                <td>{instance.courseCode}</td>
                <td>
                  <button
                    onClick={() => handleDelete(instance.id, instance.courseId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No instances found</p>
      )}
    </div>
  );
};

export default InstanceList;
