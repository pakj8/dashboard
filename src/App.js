import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import LeftSlider from "./components/common/LeftSlider";
import Navbar from "./components/Navbar/Navbar";
import IntensityLikelihoodChart from "./components/Graphs/IntensityLikelihoodChart";

function App() {
  const [data, setData] = useState([]);
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

  // useEffect(() => {
  //   const mappedData = data?.map((data) => {
  //     return data;
  //   });
  //   console.log(mappedData);
  // }, [data]);

  return (
    <>
      <Navbar setOpenLeftSlider={setOpenLeftSlider} />
      <IntensityLikelihoodChart data={data} />

      {openLeftSlider && <LeftSlider setOpenLeftSlider={setOpenLeftSlider} />}
    </>
  );
}

export default App;
