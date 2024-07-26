import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import BaseLayout from "./layouts/BaseLayout";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BaseLayout />
    </React.StrictMode>
  </Provider>,
);
