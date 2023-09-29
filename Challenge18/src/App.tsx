import links from "./data/DataLinks";
import footerLinks from "./data/DataFooterLinks";
import Header from "./components/Header";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Banner from "./components/Banner";
import Container from "./components/Container";
import ContentWrapper from "./components/ContentWrapper";
import Filters from "./contexts/Filters";
import CardContainer from "./contexts/CardContainer";
import Footer from "./components/Footer";
import titleFooter from "./data/DataTitleFooter";
import { FilterProvider } from "./contexts/FilterContext";

const icons = [faSearch, faShoppingBag];
const socialIcons = [faFacebook, faInstagram, faTwitter, faLinkedin];

const App: () => JSX.Element = () => {
  const linksFromFooter = footerLinks
    .map((footerItem) => footerItem.links)
    .flat();

  return (
    <Container>
      <Header links={links} icons={icons} />
      <Banner title="Bikes" />
      <FilterProvider>
        <ContentWrapper>
          <Filters filterBy="Filter by" gender="Gender" brand="Brand" />
          <CardContainer />
        </ContentWrapper>
      </FilterProvider>
      <Footer
        links={linksFromFooter}
        socialIcons={socialIcons}
        numDivs={3}
        titles={titleFooter}
      />
    </Container>
  );
};

export default App;
