
import { LineChart } from '@mui/x-charts/LineChart';
import './linetest.css';
import {csvJSON } from "./services/csvTodata"
import { useState } from 'react';

export default function SimpleLineChart() {
  const [data, setdata] = useState({});
    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            const csv = event.target.result;
           var x= csvJSON(csv);
           setdata(x);
           // Trigger the function with the CSV as parameter
        };

        reader.readAsText(file); // Read file as text
    }
  return (
    <div className='graph-outer'>
         <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
            />
<LineChart
      width={1000}
      height={300}
      series={[
        { data: Object.values(data), label: 'invested', id: 'pvId',},
    
      ]}
      xAxis={[{ scaleType: 'point', data: Object.keys(data) }]}
      sx={{
        '.MuiLineElement-root, .MuiMarkElement-root': {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '6',
        },
        
      }}
    />
    </div>
    
  );
}