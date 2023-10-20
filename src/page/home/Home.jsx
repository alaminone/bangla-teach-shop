import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import Bannar from "../../components/nav/bannar/Bannar";


const Home = () => {
    return (
        <div className="mx-5">
          <NavBar></NavBar>
          <Bannar></Bannar>
          <Footer></Footer>
        </div>
    );
};

export default Home;