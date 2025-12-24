import React from 'react';
import logo from '../assets/ecoTrac-logo.png'

const Logo = () => {
    return (
      <div className='flex'>
        <img className='h-8 rounded-full' src={logo} alt="logo" />
        <h1 className="text-2xl font-bold ms-1 bg-gradient-to-r from-[#1E4A8A] to-[#FF6B35] bg-clip-text text-transparent">
          eco<span className="text-green-500">Trac</span>
        </h1>
      </div>
    );
};

export default Logo;