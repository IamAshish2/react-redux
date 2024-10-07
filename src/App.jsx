import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center">
      <center className="col-lg-6 mx-auto">
        <Container className="col-lg-6 mx-auto">
          <Header />
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </Container>
      </center>
    </div>
  );
}

export default App;
