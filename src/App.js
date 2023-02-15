// ref.clientHeight
import React from "react";
import "./App.css";
import FloatingList from "./components/FloatingList";
import WheelPicker from "./components/WheelPicker";

export default function App() {
  return (
    <div className="container">
      <FloatingList />
      <WheelPicker />
    </div>
  );
}
