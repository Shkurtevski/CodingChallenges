import Data from "./data/Data";
import links from "./data/Links";
import Banner from "./components/Banner";
import DetailsBlock from "./components/DetailsBlock";
import PlacesContainer from "./components/PlacesContainer";
import "./css/main.scss";
import Footer from "./components/Footer";

const App: React.FC = () => {
  console.log(Data);
  const { id: id1, title: title1, text: text1, image: image1 } = Data[0];
  const { id: id2, title: title2, text: text2, image: image2 } = Data[1];
  return (
    <div className="App">
      <Banner
        text="summer vacation"
        title="Nomad nation"
        buttonText="read more"
      />
      <DetailsBlock key={id1} title={title1} text={text1} image={image1} />
      <PlacesContainer />
      <DetailsBlock key={id2} title={title2} text={text2} image={image2} />
      <Footer links={links} />
    </div>
  );
};

export default App;
