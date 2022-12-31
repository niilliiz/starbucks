import "./index.css";
import Layout from "./layout/layout";
import GiftCards from "./pages/gift-cards/gift-cards";
import Home from "./pages/home/home";

function App() {
  return (
    <div>
      <Layout>
        {/* <Home /> */}
        <GiftCards />
      </Layout>
    </div>
  );
}

export default App;
