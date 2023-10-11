import "./App.scss";

import Header from "./components/Header";
import ReportPage from "./components/ReportPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <div className="main__inner">
          <Header />
          <ReportPage />
        </div>
      </main>
    </>
  );
}

export default App;
