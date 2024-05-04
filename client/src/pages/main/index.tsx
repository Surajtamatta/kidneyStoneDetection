
import Header from "../../components/Header";
import Mainhero from '../../views/main'
import Sidebar from "../../components/Sidebar";
import {
    Sections,
    Container,
  } from "../../styles/pages/Main";

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <Sections>
        <Header />
        <Mainhero/>
      </Sections>
    </Container>
  );
};

export default Main;
