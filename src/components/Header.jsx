import { Bell, ChevronDown, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#F9F9FB]">
      <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-16 px-4 lg:px-8 py-4 lg:py-0 space-y-4 lg:space-y-0">
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
          Cosmediate
        </h1>

        <div className="flex items-center w-full lg:w-auto order-3 lg:order-none">
          <div className="relative w-full lg:w-auto">
            <Search className="h-5 w-8 mx-4 text-gray-400 absolute -left-2 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full lg:w-[460px] px-10 py-2 bg-inherit rounded-xl border border-[#DADAFC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="text-sm flex items-center justify-between w-full lg:w-auto lg:mr-2 order-2 lg:order-none">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <span className="absolute w-4 h-5 text-[#F88080] text-2xl top-0 left-5 rounded-full bg-[#F9F9FB] flex items-center justify-center z-10">
              ●{" "}
            </span>
            <Bell className="w-6 h-6 text-[#6968EC]" />
          </button>

          <div className="flex items-center ml-3">
            <img
              className="h-8 w-8 rounded-full"
              src="/avatar.png"
              alt="Profile"
            />
            <div className="hidden md:block ml-3">
              <p className="text-[#444753] text-sm">Tim Bouwman</p>
              <p className="text-[#8F95A9] text-xs">Alstec Amsterdam</p>
            </div>
            <ChevronDown className="text-[#8F95A9] text-sm ml-3 lg:ml-7" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
