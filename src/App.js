import React, { memo } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default memo(App);
