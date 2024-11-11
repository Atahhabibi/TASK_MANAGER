import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
