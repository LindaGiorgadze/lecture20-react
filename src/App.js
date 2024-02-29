// import { ReactComponent as Logo } from "./logo.svg";
import "./App.scss";
import Form from "./components/Form";
import Button from "./components/Button";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        {/* <Logo className="App-logo" title="Logo" /> */}
        <Form />
        <Button />
        <Row className="example">
          <Col className="column" xs={2} />
          <Col className="column" md={6} />
          <Col className="column" md={3} />
        </Row>
      </header>
    </div>
  );
}

export default App;
