import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <header className="w-full bg-header-1 shadow-[0px_4px_34px_#888888ff] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img 
              src="/images/img_logo_icon.png" 
              alt="Mailz.so Logo" 
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
            />
            <h1 className="text-header-2 font-poppins font-semibold text-lg sm:text-xl md:text-[23px] leading-[35px]">
              Mailz.so
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-9 p-4 lg:p-0">
              <button 
                role="menuitem"
                className="text-header-1 font-jakarta font-semibold text-sm sm:text-[15px] leading-[19px] hover:text-global-2 transition-colors"
              >
                Home
              </button>
              <button 
                role="menuitem"
                className="text-header-1 font-jakarta font-semibold text-sm sm:text-[15px] leading-[19px] hover:text-global-2 transition-colors"
              >
                About
              </button>
              
              {/* Features Dropdown */}
              <div className="relative">
                <button 
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={featuresOpen}
                  className="flex items-center gap-2 text-header-1 font-jakarta font-semibold text-sm sm:text-[15px] leading-[19px] hover:text-global-2 transition-colors"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  Features
                  <img 
                    src="/images/img_frame_104.svg" 
                    alt="Dropdown arrow" 
                    className="w-[10px] h-[5px] sm:w-[12px] sm:h-[6px]"
                  />
                </button>
                {featuresOpen && (
                  <ul role="menu" className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-10">
                    <li role="menuitem" className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Task Management</li>
                    <li role="menuitem" className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Team Collaboration</li>
                    <li role="menuitem" className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Analytics</li>
                  </ul>
                )}
              </div>
              
              <button 
                role="menuitem"
                className="text-header-1 font-jakarta font-semibold text-sm sm:text-[15px] leading-[19px] hover:text-global-2 transition-colors"
              >
                Testimorial
              </button>
              <button 
                role="menuitem"
                className="text-header-1 font-jakarta font-semibold text-sm sm:text-[15px] leading-[19px] hover:text-global-2 transition-colors"
              >
                Pricing
              </button>
            </div>
          </nav>

          {/* Auth Section */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto right-0 lg:right-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 mt-2 lg:mt-0`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[18px] p-4 lg:p-0">
              <button className="text-header-1 font-jakarta font-semibold text-sm sm:text-[14px] leading-[18px] hover:text-global-2 transition-colors">
                Login
              </button>
              <Button 
                variant="primary" 
                size="medium"
                className="pt-[8px] pr-[24px] pb-[8px] pl-[24px] sm:pt-[10px] sm:pr-[32px] sm:pb-[10px] sm:pl-[32px]"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;