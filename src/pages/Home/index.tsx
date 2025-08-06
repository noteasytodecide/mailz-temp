import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/images/img_background.png')] bg-cover bg-center bg-no-repeat">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[122px] pb-[60px] sm:pb-[80px] md:pt-[100px] lg:pb-[122px]">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center relative">
            
            {/* New Feature Badge */}
            <div className="flex items-center bg-[linear-gradient(180deg,#ffffff4c_0%,_#ffffff4c_100%)] border border-white rounded-[16px] p-1 shadow-[0px_4px_24px_#888888ff] mb-6 sm:mb-8">
              <span className="bg-global-1 text-global-4 font-inter text-xs sm:text-[14px] leading-[17px] px-2 py-1 rounded-[10px] shadow-[0px_1px_2px_#1422f408]">
                New
              </span>
              <div className="flex items-center gap-1.5 px-3">
                <span className="text-global-1 font-inter text-sm sm:text-[15px] leading-[19px]">
                  We have just released a new feature
                </span>
                <img 
                  src="/images/img_arrow_1.svg" 
                  alt="Arrow" 
                  className="w-[8px] h-[1px] sm:w-[10px] sm:h-[1px] mt-2"
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-playfair font-bold text-[35px] sm:text-[45px] md:text-[55px] lg:text-[70px] leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[81px] text-center mb-4 sm:mb-6">
              <span className="text-global-2">Boost Your </span>
              <span className="bg-[linear-gradient(228deg,#ff29a7_0%,#3236e1_50%,#00b5ff_100%)] bg-clip-text text-transparent">
                Productivity,
              </span>
              <br />
              <span className="text-global-2">Simplify Your Life</span>
            </h1>

            {/* Description */}
            <p className="text-global-3 font-jakarta font-medium text-sm sm:text-base md:text-lg lg:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[29px] text-center max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[872px] mb-6 sm:mb-8 lg:mb-[30px]">
              We are here to simplify the intricacies of your life, providing a user-friendly platform that not only manages
              <br className="hidden sm:block" />
              your tasks effortlessly but also enhances your overall efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 mb-8 sm:mb-12 lg:mb-16">
              <Button 
                variant="primary" 
                size="large"
                className="pt-[12px] pr-[28px] pb-[12px] pl-[28px] sm:pt-[14px] sm:pr-[34px] sm:pb-[14px] sm:pl-[34px] text-sm sm:text-[16px] leading-[21px] rounded-[26px]"
              >
                Get Started
              </Button>
              <button className="bg-global-2 text-[18px] leading-[23px] font-jakarta font-semibold text-center bg-[linear-gradient(235deg,#ff29a7_0%,#3236e1_50%,#00b5ff_100%)] bg-clip-text text-transparent border-2 border-transparent rounded-[26px] pt-[12px] pr-[28px] pb-[12px] pl-[28px] sm:pt-[14px] sm:pr-[34px] sm:pb-[14px] sm:pl-[34px] relative overflow-hidden">
                <span className="absolute inset-0 rounded-[26px] p-[2px] bg-[linear-gradient(222deg,#da8cbc_0%,#d293c0_50%,#94d0e7_100%)]">
                  <span className="flex items-center justify-center w-full h-full bg-white rounded-[24px]">
                    Preview Platform
                  </span>
                </span>
                <span className="relative z-10">Preview Platform</span>
              </button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative w-full max-w-[900px] sm:max-w-[1000px] lg:max-w-[1068px] mx-auto">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff00_0%,#ffffff_100%)] z-10 pointer-events-none"></div>
              
              {/* Dashboard Container */}
              <div className="relative bg-[linear-gradient(180deg,#ffffff4c_0%,#ffffff4c_100%)] border-2 border-white rounded-lg p-2 sm:p-[10px] shadow-[0px_4px_24px_#888888ff]">
                <div className="bg-global-2 rounded-lg overflow-hidden">
                  <img 
                    src="/images/img_image_63.png" 
                    alt="Dashboard Preview" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;