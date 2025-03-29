import "./styles/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { routes } from "./routes.tsx";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
