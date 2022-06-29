import Text from "./components/Text";
import "./App.css";
import React from "react";

const Emphasis = ({ children }: { children: string }) => (
  <em style={{ background: "yellow", color: "black", fontSize: "24px" }}>{children}</em>
);

function App() {
  return (
    <div className='App'>
      <p>Hello Vite + React!</p>
      <Text as='h1' color='blue'>
        H1
      </Text>
      <Text as='h2'>H2</Text>
      <Text as='a' href='asd'>
        H2
      </Text>
      <br />
      <Text as={Emphasis}>!Emphasis!</Text>
    </div>
  );
}

export default App;
