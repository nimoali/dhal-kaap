import Munslider from "../component/Munslide";
import Map from "../component/Map";

function Cimlilada(){
    return <div>
        {/* <Munslider /> */}
        <div className="w-[100%] h-[400px] bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/dark-stormy-clouds_181624-61.jpg?w=740')]">
        <div className="relative text-center pt-20">
    <input type="text" className="border border-gray-300 rounded py-2 px-96 pl-10 focus:outline-none focus:border-blue-500" placeholder="Search You Address" />
    <i className="absolute left-[330px] top-[100px] transform -translate-y-1/2 text-gray-400 fas fa-search"></i>
   </div>


        </div>
        <Map />

    </div>
}

export default Cimlilada;











