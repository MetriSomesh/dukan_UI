import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopBar from "./Components/TopBar";
import Overview from "./Components/Overview";
import Transactions from "./Components/Transactions";
import Table from "./Components/Table";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#FAFAFA]">
      <Sidebar />

      <div className="border-b sm:pl-64 bg-[#FFFFFF]">
        <TopBar />
      </div>

      <div className="m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />

        <div className="grid gap-6">
          <Transactions />
          <Table />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
