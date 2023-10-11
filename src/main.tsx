import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/ru";

import App from "./App.tsx";
import "./vars.scss";
import "./index.scss";

dayjs.locale("ru");
dayjs.extend(localeData);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
