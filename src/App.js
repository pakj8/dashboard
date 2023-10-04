import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import IntensityBarChart from "./components/IntensityBarChart";
import LeftSlider from "./components/common/LeftSlider";

function App() {
  const [data, setData] = useState(null);
  const [openLeftSlider, setOpenLeftSlider] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/jsondata")
      .then((response) => {
        if (response.status === 200) {
          const jsonData = response.data;
          setData(jsonData);
        } else {
          console.error("Failed to fetch data.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(data);

  return (
    <>
      <IntensityBarChart data={data} />
      <button onClick={() => setOpenLeftSlider(true)} className="border p-4">
        Open
      </button>
      {openLeftSlider && <LeftSlider setOpenLeftSlider={setOpenLeftSlider} />}
    </>
  );
}

export default App;
