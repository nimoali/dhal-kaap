import App from "../../App";
import '../Style/Style.css';
import Sustainable from "./Sustainable";
import Prove from "./Prove";

function Home() {
  return (
    <div>
      <nav>
      <div className="bg-[#689C00] text-white flex gap-5 justify-between px-10 pt-10">
        <h1 className="text-white text-2xl">Dhul Kaab</h1>
        <div className="flex gap-4 mr-[15%]">
          <ul className="flex gap-8 text-white">
            <li>Home</li>
            <li>About</li>
            <li>New</li>
            <li>Contact</li>
          </ul>
          <button className="bg-[#8BA17F] px-8 py-2 rounded ml-24">Sign In</button>
          <button className="px-8 py-1 rounded bg-transparent border-2 border-[#8BA17F] ml-10">Sign Out</button>
        </div>
      </div>
      </nav>

      <div className="h-[500px] bg-no-repeat bg-cover text-white w-full bg-[url('https://img.freepik.com/free-photo/senior-hardworking-farmer-agronomist-soybean-field-checking-crops-before-harvest_342744-1260.jpg?w=740')] shadow-md-dark">
        <h1 className="text-green-500 font-bold ">Dabiici ahow</h1>
        <h1 className="text-2xl font-bold ml-[23%] pt-[20%] w-[500px] text-opacity-75">Waxaad Kala Socon Kartaa Isbedelka Cililad Iyo Wax Kasta oo quseeyo Bereertaada</h1>
        <p className="ml-[23%] text-opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum!</p>
        <button className="ml-[23%] bg-green-400 rounded px-8 py-1">Discover + </button>
      </div>
      <Sustainable />
      <Prove />
    </div>
  );
}

export default Home;
