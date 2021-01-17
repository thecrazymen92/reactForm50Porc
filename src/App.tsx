import React from "react";
import { MyForm } from "./MyForm";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm
        onSubmit={({ email, firstName, lastName , paso, arr }) => {
          
        }}
      />
    </div>
  );
};

export default App;
