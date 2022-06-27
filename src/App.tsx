import Text from "./components/Text";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <p>Hello Vite + React!</p>
      <Text as='h1'>H1</Text>
      <Text as='h2'>H2</Text>
      <Text as='a' href='asd'>
        H2
      </Text>
    </div>
  );
}

export default App;
