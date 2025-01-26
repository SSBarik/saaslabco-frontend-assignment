import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Home from "@pages/home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
