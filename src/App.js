import React from "react";
import "./App.css";
import RelationVisualizer from "./containers/RelationVisualizer/RelationVisualizer";
import Controls from "./containers/Controls";

function App() {
  return (
    <div className="App">
      <Controls />
      <RelationVisualizer margin={100} />
    </div>
  );
}

export default App;
