import React, { useState } from 'react';

function Munslide() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleSidebar}> {isOpen ? "Hide" : "Show"} </button>
            <div className={`fixed inset-y-0 left-0 flex flex-col w-64 bg-white shadow-md transform transition duration-300 ease-in-out ${isOpen ? '' : '-translate-x-full'}`}>
                <div className="p-4 border-b">
                    <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="p-4">
                    {/* Sidebar content goes here */}
                    <ul>
                        <li className="mb-2">Item 1</li>
                        <li className="mb-2">Item 2</li>
                        <li className="mb-2">Item 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Munslide;
