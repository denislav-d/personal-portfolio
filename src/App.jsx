import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="z-0 bg-[#9b9b9b] h-screen">
      <div className="flex justify-center items-center fixed bottom-0 w-full mb-6">
        <NavMenu />
      </div>
    </div>
  );
}

export default App;
