import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import IntensityBarChart from "./components/IntensityBarChart";

function App() {
  const [data, setData] = useState(null);

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
        console.error("Error fetching data:", error);
      });
  }, []);

  // console.log(data);

  return (
    <>
      <IntensityBarChart data={data} />
    </>
  );
}

export default App;
