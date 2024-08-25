import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import InstanceList from "./components/InstanceList";
import InstanceForm from "./components/InstanceForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Centering the h1 and adding background */}
        <h1 className="text-center py-4 bg-success text-white">
          Course and Instance Manager
        </h1>

        <div className="row">
          <div className="col-md-6">
            <CourseForm />
          </div>
          <div className="col-md-6">
            <CourseList />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <InstanceForm />
          </div>
          <div className="col-md-6">
            <InstanceList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
