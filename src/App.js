import React, { useState, useEffect } from "react";
import "./App.css";

import { Line } from "react-chartjs-2";


export default function App() {

  const [data, setData] = useState({});
  const [minValue, setMinValue] = useState(0);
  const [region, setRegion] = useState('');
  const [rawData, setRawData] = useState([]);


  useEffect(() => {

    //fetch('SUA API AQUI').then(response => response.json()).then(data => setRawData(data));

    setRawData([
      { id: '1', birthday: 1, spend: 2000, region: 'United States' },
      { id: '2', birthday: 2, spend: 3000, region: 'APAC' },
      { id: '3', birthday: 3, spend: 2000, region: 'Asia' },
      { id: '4', birthday: 4, spend: 3000, region: 'Latin America' },
      { id: '5', birthday: 5, spend: 2000, region: 'United States' },
      { id: '6', birthday: 6, spend: 3000, region: 'APAC' },
      { id: '7', birthday: 7, spend: 2000, region: 'Asia' },
      { id: '8', birthday: 8, spend: 3000, region: 'Latin America' },
      { id: '9', birthday: 9, spend: 2000, region: 'United States' },
      { id: '10', birthday: 10, spend: 3000, region: 'APAC' },
      { id: '11', birthday: 11, spend: 2000, region: 'Asia' },
      { id: '12', birthday: 12, spend: 3000, region: 'Latin America' },
      { id: '13', birthday: 1, spend: 2000, region: 'United States' },
      { id: '14', birthday: 2, spend: 3000, region: 'APAC' },
      { id: '15', birthday: 3, spend: 2000, region: 'Asia' },
      { id: '16', birthday: 4, spend: 3000, region: 'Latin America' },
      { id: '17', birthday: 5, spend: 2000, region: 'United States' },
      { id: '18', birthday: 6, spend: 3000, region: 'APAC' },
      { id: '19', birthday: 7, spend: 2000, region: 'Asia' },
      { id: '20', birthday: 8, spend: 3000, region: 'Latin America' },
      { id: '21', birthday: 9, spend: 2000, region: 'United States' },
      { id: '22', birthday: 10, spend: 3000, region: 'APAC' },
      { id: '23', birthday: 11, spend: 2000, region: 'Asia' },
      { id: '24', birthday: 12, spend: 3000, region: 'Latin America' },

    ]);

  }, [])

  useEffect(() => {

    const filteredRawData = rawData.filter(row => row.spend >= minValue && (region === '' || row.region === region));


    let groupByBirthday = filteredRawData.reduce((acc, it) => {
      acc[it.birthday - 1] = acc[it.birthday - 1] + 1 || 1;
      return acc;
    }, []);

    let groupByCumulative = filteredRawData.reduce((acc, it) => {
      acc[it.birthday - 1] = acc[it.birthday - 1] + 5 || 5;

      return acc;
    }, []);

    for (let i = 1; i < groupByCumulative.length; i++) {
      for (let y = i - 1; y >= 0; y--) {
        if (!!groupByCumulative[y]) {
          groupByCumulative[i] += groupByCumulative[y];
          break;
        }
      }
    }

    setData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dez"],
      datasets: [
        {
          label: "Monthly",
          data: groupByBirthday,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          spanGaps: true
        },
        {
          label: "Cumulative",
          data: groupByCumulative,
          fill: false,
          borderColor: "#742774",
          spanGaps: true
        }
      ]
    });

  }, [rawData, minValue, region]);



  return (
    <div className="App">
      <label for="minValue">Min. Value (0-5000):</label>
      <input type="number" min="0" max="5000" id="minValue" name="minValue" value={minValue} onChange={event => setMinValue(event.target.value)} />
      <label for="region">Region:</label>
      <select id="region" name="region" value={region} onChange={event => setRegion(event.target.value)} >
        <option value="">All</option>
        <option value="United States">United States</option>
        <option value="APAC">APAC</option>
        <option value="Asia">Asia</option>
        <option value="Latin America">Latin America</option>
      </select>
      <Line data={data} />
    </div>
  );
}