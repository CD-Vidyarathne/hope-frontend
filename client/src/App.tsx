import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <div className="max-w-[100%] h-screen flex flex-col">
      <Navbar />
      <section className="w-full flex-grow">
        <Home />
      </section>

      <Footer />
    </div>
  );
}

export default App;
