import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "blue",
            borderColor: "blue",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 5,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#7bdff2",
            borderColor: "#7bdff2",
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: false,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
            //   display: true,
            //   scaleLabel: {
            //     display: false,
            //     labelString: "Month",
            //   },
               gridLines: {
                display: false

            //     borderDash: [2],
            //     borderDashOffset: [2],
            //     color: "rgba(33, 37, 41, 0.3)",
            //     zeroLineColor: "rgba(33, 37, 41, 0.3)",
            //     zeroLineBorderDash: [2],
            //     zeroLineBorderDashOffset: [2],
               },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "USD $",
              },
               gridLines: {
            //     borderDash: [2],
            //     drawBorder: false,
            //     borderDashOffset: [2],
            //     color: "rgba(33, 37, 41, 0.2)",
            //     zeroLineColor: "rgba(33, 37, 41, 0.15)",
            //     zeroLineBorderDash: [2],
            //     zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="h-full">
        <div className="rounded-t bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
            <h1 className="text-2xl font-bold">Dividends</h1>

              {/* <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
              </h2> */}
            </div>
          </div>
        </div>
        <div className="p-2 flex-auto">
          {/* Chart */}
          <div className="relative h-[200px]">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}