import React, { useState } from "react";
import Chart from "react-apexcharts";

function AppChart() {
  const [data, setData] = useState({
    series: [
      {
        name: "series1",
        data: [
          50000, 60000, 70000, 90000, 88000, 71000, 68000, 48000, 81000, 50000,
          109000, 100000,
        ],
      },
    ],
    options: {
      chart: {
        height: 280,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#8c1ae8"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityForm: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "dates",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return (value / 1000).toFixed(0) + "k";
          },
        },
      },
      tooltip: {
        x: {
          format: "MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}

export default AppChart;
