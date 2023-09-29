import Container from "./components/containers/Container";
import ArtistsContent from "./components/containers/ArtistsContent";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <ArtistsContent />
      </Container>
    </BrowserRouter>
  );
}

export default App;
