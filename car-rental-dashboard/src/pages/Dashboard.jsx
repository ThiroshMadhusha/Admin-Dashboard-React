import React from "react";
import "../styles/dashboard.css";

import SingleCard from "../components/reusable/SingleCard";
import MileChart from "../charts/MileChart";
import CarStatusCart from "../charts/CarStatusCart";

import RecommendCarCard from "../components/UI/RecommendCarCard";
import RecommendCardData from "../assets/dummy-data/recommendCars"

const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statics</h3>
            <CarStatusCart />
          </div>
        </div>
        <div className="recommend__cars-wrapper">
          {RecommendCardData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
