import Text from "./components/Text";
import "./App.css";
import React, { useRef } from "react";

const Emphasis = ({ children }: { children: string }) => (
  <em style={{ background: "yellow", color: "black", fontSize: "24px" }}>{children}</em>
);

function App() {
  const ref = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);

  return (
    <div className='App'>
      <p>Hello Vite + React!</p>
      {/* Now the ref must be strongly typed */}
      <Text ref={ref2} as='h1' color='blue' style={{ background: "black" }}>
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
