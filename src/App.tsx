import "./App.css";
import { RiveSandbox } from "./pages/RiveSandbox";
import { RiveFileTwo } from "./pages/RiveFile2";
import Rive from "@rive-app/react-canvas";

function App() {
  return (
    <>
      <RiveSandbox />
      <RiveFileTwo />
    </>
  );
}

export default App;
