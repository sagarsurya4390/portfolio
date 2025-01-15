import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="font-custom p-4">
      <div className="fixed top-0 left-0 w-full bg-blue-950 px-10 py-2 rounded-b-full bg-gradient-to-r from-blue-900 to-pink-700">  
        <ul
          className={`sm:flex sm:justify-between sm:items-center sm:space-x-8 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="hover:bg-black rounded-full px-3 py-2 hover:text-lg">Home</li>
          <li className="hover:bg-black rounded-full px-3 py-2 hover:text-lg">Projects</li>
          <li className="hover:bg-black rounded-full px-3 py-2 hover:text-lg">Certifications</li>
          <li className="hover:bg-black rounded-full px-3 py-2 hover:text-lg">Contact Me</li>
        </ul>
      </div>
    </div>
  );
}
