import NavMenu from "./components/NavMenu.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <Home />
      <div className="flex justify-center items-center fixed bottom-0 w-full mb-8">
        <NavMenu />
      </div>
    </>
  );
}

export default App;
