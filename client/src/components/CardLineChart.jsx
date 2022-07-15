import React from "react";
import Chart from "chart.js";

export default function CardLineChart({ totalValue, title, dataSet, chartColor }) {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "August",
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: chartColor,
            borderColor: chartColor,
            data: dataSet,
            fill: false,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "title",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "gray",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "black",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "black",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "black",
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "USD $",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [1],
                borderDashOffset: [3],
                drawBorder: false,
                color: "grey",
                zeroLineColor: "purple",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById(`line-chart-${title}`).getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full h-full">
        <div className="rounded-t bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex space-x-5">
              <h6 className="text-gray-500 text-2xl font-bold">
                {title}:
              </h6>
              <h1 className="text-2xl">${totalValue}</h1>
            </div>
          </div>
        </div>
        <div className="flex-auto text-blue-500 mt-3">
          {/* Chart */}
          <div className="relative h-80">
            <canvas id={`line-chart-${title}`}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}