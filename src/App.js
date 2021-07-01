import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          Others go here
        </div>
      </div>
    </div>
  );
}

export default App;
