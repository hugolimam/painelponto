import React, { useState, useEffect } from "react";
import Menu from "./screens/menu/Menu";
import Inicio from "./screens/inicio/Inicio";

import { initApp } from "./firebase";

export default function App() {
  useEffect(() => {
    initApp();
  }, []);

  const [filter, setFilter] = useState("Todos");

  return (
    <div>
      <Menu filter={filter} onChangeFilter={setFilter} />
      <Inicio filter={filter} />
    </div>
  );
}
