import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoute />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
