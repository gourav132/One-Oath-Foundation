import { Navbar, Contact } from "./Components";

function App() {
  return (
    <div className="dark:bg-black bg-white transition-colors duration-300 ease-in-out h-screen">
      <Navbar />
      <Contact />
    </div>
  );
}

export default App;
