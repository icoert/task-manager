import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Logo Section */}
      <div className="flex space-x-4 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="w-16 h-16 transition-transform transform hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="w-16 h-16 transition-transform transform hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600">
        Vite + React + TailwindCSS
      </h1>

      {/* Counter Section */}
      <div className="mt-4 p-6 bg-white rounded-lg shadow-md text-center">
        <Button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Count is {count}
        </Button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and
          save to test HMR.
        </p>
      </div>

      {/* Documentation Link */}
      <p className="mt-6 text-sm text-gray-500">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
