import React from "react";
import "./Row1.css";
import John from "../../images/illustration-john-light.png";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import wallet from "../../images/wallet.png";
import { useSelector } from "react-redux";

Chart.register(...registerables);

export default function Row1() {
  let row1c1 = useSelector((state) => state.row1.row1c1);
  let d_data = row1c1.filter((item) => item.name === "r1data");
  let d_option = row1c1.filter((item) => item.name === "r1option");

  const data = d_data[0];

  const options = {
    elements: d_option[0].elements,

    plugins: d_option[0].plugins,

    scales: d_option[0].scales,
  };
  return (
    <div className="first_row">
      <div className="row1 c1">
        <div className="left">
          <h5 className="congrats">Congratulations John !</h5>
          <div className="text">
            You have done 72% more sales today.
            <br />
            Check your new badge in your profile.
          </div>
          <button className="badge">View Badges</button>
        </div>
        <div className="right">
          <img className="john" src={John} alt="" />
        </div>
      </div>
      <div className="row1">
        <div className="word">
          <p className="w_title">Order</p>
          <h5 className="w_sales">276k</h5>
        </div>
        <Line data={data} options={options} />
      </div>
      <div className="row1 c2">
        <div className="wallet_top">
          <img className="wallet" src={wallet} alt="" />
          <MoreVertIcon />
        </div>
        <div className="word w1">
          <p className="w_title">Sales</p>
          <h5 className="w_sales">$4,679</h5>
          <p className="percent">↑ 28.14%</p>
        </div>
      </div>
    </div>
  );
}
