import "./styles/App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { routes } from "./routes.tsx";

const AppRoutes = () => useRoutes(routes);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
