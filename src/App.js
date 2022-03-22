import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Component/Navigation";
import Sidebar from "./Component/Sidebar";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
