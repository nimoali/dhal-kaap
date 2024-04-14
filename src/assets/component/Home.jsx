import App from "../../App";
import '../Style/Style.css';
import '../Style/Register.css';
import Sustainable from "./Sustainable";
import Prove from "./Prove";
import Register from "../pages/Register";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Link to="/" ></Link>
      <Header />
      <div className="h-[500px] bg-no-repeat bg-cover text-white w-full bg-[url('https://img.freepik.com/free-photo/spooky-forest-moody-sky-electricity-strikes-tree-generative-ai_188544-40600.jpg?w=826')] shadow-md-dark">
        <h1 className="text-[#006400] ml-[50%] pt-10">beerta ilaasho</h1>
        <h1 className="sm:text-2xl text-xl font-bold text-center mt-24 sm:ml-[3%] sm:pt-[0%] sm:w-[500px] text-opacity-75">Waxaad Kala Socon Kartaa Isbedelka Cililad Iyo Wax Kasta oo quseeyo Bereertaada</h1>
        <p className="ml-[3%] text-opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum!</p>
        <button className="ml-[23%] bg-green-400 rounded px-8 py-1">Discover + </button>
      </div>
      <Sustainable />
      <Prove />
      <Footer />
    </div>
  );
}

export default Home;
