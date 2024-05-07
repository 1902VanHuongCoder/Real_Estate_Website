import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({data, columnName}) => {
 const options = {
   chart: {
     id: "basic-bar",
   },
   xaxis: {
     categories: columnName,
   },
 };

 const series = [
   {
     name: "triệu",
     data: data,
     colors: ['#008FFB', '#ee4d2d'],
   },
 ];

 return (
   <div className="w-full">
     <div className="w-full">
       <div className="mixed-chart">
         <Chart options={options} series={series} type="bar" className="w-full" />
       </div>
     </div>
   </div>
 );
};

export default BarChart;