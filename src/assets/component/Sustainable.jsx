function Sustainable(){
    return <div className="sm:flex  gap-6 justify-between mt-10">
        <div className="sm:flex gap-4 justify-between">
            <div className="ml-[25%]">
            <div className="w-[220px] h-[220px] bg-green-400 rounded-[45px]  pt-2 px-2 text-white relative">
                <p className="text-3xl font-bold">10K+</p>
                <h1>clients</h1>
            </div>
            <img className="rounded-full w-[280px] h-[280px] bottom-[150px] relative" src="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?t=st=1712654359~exp=1712657959~hmac=d4911bd4e83efebf9113bac1d657bbe47a7840a2c29c77c136e6d82d395d9270&w=740"  alt="" />
            </div>
        </div>

        {/* .............................  */}
        <div className=" ml-[20%]">
            <h1 className="text-green-500">About us</h1>
            <h1 className="text-3xl font-bold">Ilaa linta Beeraha iyo Deegaanka</h1>
            <p className="w-[50%]">
                Ilaa inta deeganta wax uu muhiim uyahey cafimaadka noolaha ,
                 iyada la ilaalinaayo cafimaadka waa in la joojiya wax yabaha ku keenayo 
                cafimaad darada waxaa lagu yareen karaa Dadaka oo is xilqaama qofkasatana isku garta iney wax ka galeen Ilaalinta degaanka .
            </p>
            <ul class="list-disc mt-6">
            <li class="mb-2">waa ina la soctid waqtiyada oo isku badalaayo cimilada</li>
            <li class="mb-2">waa inaa ka war qabtid caafimadka beertada</li>
            <li class="mb-2">wa inad ogaata waqtiyada loo baahayanyahdagalgaany</li>
            <li class="mb-2">waa inaa fikrad ka heesatid caafimaadka bertaaada</li>
        </ul>


    


            <div className="flex gap-6  mt-10">
                <img className="w-[60px] h-[60px] rounded-full" src="https://img.freepik.com/free-photo/person-planting-tree-countryside_23-2149401202.jpg?w=360" alt="" />
                <div>
                    <h1>Beera leeyey</h1>
                    <p>mohamed Ahmed</p>
                </div>
                <button className="ml-[3%] bg-green-400 rounded px-6 py-1 text-white">Discover + </button>
            </div>
        </div>
    </div>
}

export default Sustainable;
