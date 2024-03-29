import React from "react";
import "./Row2.css";
import ApexChart from "react-apexcharts";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import paypal from "../../images/paypal.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";
Chart.register(...registerables);
export default function Row2() {
  let row2c1 = useSelector((state) => state.row1.row2c1);
  let d_data1 = row2c1.filter((item) => item.name === "r2c1data");
  let d_option1 = row2c1.filter((item) => item.name === "r2c1option");
  let d_plugin1 = row2c1.filter((item) => item.name === "r2c1plugin");
  let d_option2 = row2c1.filter((item) => item.name === "r2c2option");
  let d_data3 = row2c1.filter((item) => item.name === "r2c3data");
  const series5 = [78];

  const options5 = {
    chart: d_option2[0].chart,
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: "rgb(105, 108, 255)",
            offsetY: 120,
          },
          value: {
            offsetY: -10,
            fontSize: "22px",
            color: "rgb(105, 108, 255)",
            formatter: function (val) {
              return 78 + "%";
            },
          },
        },
      },
    },
    fill: {
      colors: ["rgb(105, 108, 255)"],
      type: "gradient",
      gradient: {
        gradientToColors: ["rgb(105, 108, 255)"],
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: true,
        opacityFrom: 0.2,
        opacityTo: 1,
        stops: [0, 50, 65],
      },
    },
    stroke: d_option2[0].stroke,
    labels: d_option2[0].labels,
  };
  // console.log(d_option2[0], options5);
  const borderRadius = 50;
  const borderRadiusAllCorners = {
    topLeft: borderRadius,
    topRight: borderRadius,
    bottomLeft: borderRadius,
    bottomRight: borderRadius,
  };
  const data = d_data1[0];
  console.log(data);

  const options = d_option1[0];

  const plugin = {
    beforeInit: function (chart) {
      // Get reference to the original fit function
      const originalFit = chart.legend.fit;

      // Override the fit function
      chart.legend.fit = function fit() {
        // Bind scope in order to use `this` correctly inside it
        originalFit.bind(chart.legend)();
        this.height += 20; // Change the height
      };
    },
  };

  const data1 = d_data3[0];

  const options1 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: true,
          color: "rgba(50, 71, 92, 0.37)",
        },
        border: {
          display: false,
        },
        display: true,
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  const data3 = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [12, 33, 18, 24, 22, 32],
        pointRadius: [0, 0, 0, 0, 0, 0],
        lineTension: 0.5,
        fill: false,
        borderColor: "#FFAB00",
        borderWidth: 4,
      },
    ],
  };

  const options3 = {
    elements: {
      point: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="second_row">
      <div className="row2 r1">
        <div className="left">
          <div className="left_top">
            <h5 className="revenue_t">Total Revenue </h5>
          </div>
          <div className="left_bot">
            <Bar data={data} options={options} plugins={[plugin]} />
          </div>
        </div>
        <div className="right">
          <select className="year" name="" id="">
            <option value="">2024</option>
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
          </select>
          <ApexChart series={series5} options={options5} type="radialBar" />
        </div>
      </div>
      <div className="r2">
        <div className="top">
          <div className="tl row2">
            <div className="wallet_top">
              <img className="wallet" src={paypal} alt="" />
              <MoreVertIcon />
            </div>
            <div className="word w1">
              <p className="w_title">Payments</p>
              <h5 className="w_sales">$2,468</h5>
              <p className="percent">↓ 14.86%</p>
            </div>
          </div>
          <div className="tr row2">
            <div className="word">
              <p className="w_title">Revenue</p>
              <h5 className="w_sales">425k</h5>
            </div>
            <Bar data={data1} options={options1} />
          </div>
        </div>
        <div className="bot row2">
          <div className="botl">
            <div className="botlt">
              <h5 className="revenue_t">Profit Report</h5>
              <div className="year">YEAR 2024</div>
            </div>
            <div className="botlb">
              <p className="bperct">
                <KeyboardArrowUpIcon /> 68.2%
              </p>
              <h5 className="pr_price">$84,686k</h5>
            </div>
          </div>
          <div className="botr">
            <Line data={data3} options={options3} />
          </div>
        </div>
      </div>
    </div>
  );
}
