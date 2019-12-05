import React, { useEffect } from "react";
import Menu from "./screens/menu/Menu";
import Inicio from "./screens/inicio/Inicio";

import { initApp } from "./firebase";

export default function App() {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <div>
      <Menu />
      <Inicio />
    </div>
  );
}
