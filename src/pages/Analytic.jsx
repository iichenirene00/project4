import React from "react";
import { useEffect } from "react";
import "./Analytic.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Row1 from "../components/Analytics/Row1";
import Row2 from "../components/Analytics/Row2";
import Row3 from "../components/Analytics/Row3";
import Row4 from "../components/Analytics/Row4";
import { r1c1, r2c1, loaded1, loaded2 } from "../components/store/row1Slice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
export default function Analytic() {
  let isfixed = useSelector((state) => state.fix.isfixed);
  let row1c1 = useSelector((state) => state.row1.row1c1);
  let isLoading1 = useSelector((state) => state.row1.loading1);
  let isLoading2 = useSelector((state) => state.row1.loading2);
  let dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://server-2-29yp.onrender.com/api/v1/row2")
      .then((data) => {
        dispatch(r2c1(data.data));
        dispatch(loaded2());
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://server-2-29yp.onrender.com/api/v1/row1")
      .then((data) => {
        dispatch(r1c1(data.data));
        dispatch(loaded1());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading1) {
    return <div className="loading">Loading..</div>;
  }
  if (isLoading2) {
    return <div className="loading">Loading..</div>;
  }

  return (
    <div className={isfixed ? "analytic_wrapper_opened" : " analytic_wrapper"}>
      <div className="analytic_content">
        <Sidebar />
        <Header />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
    </div>
  );
}
