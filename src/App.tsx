import "./App.css";
import { Container2 } from "./components/Container";
import {

  ToastContextProvider,
} from "./components/context/ToastContext";


function App() {


  return (
    <>
      <ToastContextProvider>
        <Container2 />
      </ToastContextProvider>
    </>
  );
}

export default App;
