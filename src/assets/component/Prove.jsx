import React from 'react';

function Prove() {
    return (
        <div className="bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/side-view-hands-gardening_23-2149894697.jpg?w=740')]">
            <h1 className="text-center text-white">We prove it</h1>
            <h1 className="text-xl text-center text-white">Service</h1>
            <div className="flex flex-col sm:flex-row gap-6 mx-4">
                <div className="w-full sm:w-auto">
                    <div className="bg-white rounded w-full sm:w-[300px] h-[70px] text-center relative top-8 mx-auto sm:mx-10">
                        <h1></h1>
                       <p className='text-xl font-bold'>Ogoow cilimada waqtiga maraayo</p>
                    </div>
                    <img className="w-full sm:w-[400px] h-[200px] mx-auto" src="https://img.freepik.com/free-vector/template-weather-prognosis_23-2147551469.jpg?w=740" alt="" />
                </div>
                <div className="w-full sm:w-auto">
                    <div className="bg-white rounded w-full sm:w-[300px] h-[70px] text-center relative top-8 mx-auto sm:mx-10">
                        <h1>type</h1>
                        <p className='font-bold text-xl'>Roob ma keeni karno lakiin waa kusheegi karnaaa</p>
                    </div>
                    <img className="w-full sm:w-[400px] h-[200px] mx-auto" src="https://img.freepik.com/free-photo/weather-effects-collage-concept_23-2150062064.jpg?w=740" alt="" />
                </div>
                <div className="w-full sm:w-auto">
                    <div className="bg-white rounded w-full sm:w-[300px] h-[70px] text-center relative top-8 mx-auto sm:mx-10">
                        <h1>type</h1>
                        <p>carring</p>
                    </div>
                    <img className="w-full sm:w-[400px] h-[200px] mx-auto" src="https://img.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg?w=740" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Prove;
