import { Bell, ChevronDown, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#F9F9FB]">
      <div className="flex justify-between items-center h-16 px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Cosmediate</h1>
        <div className="flex items-center space-x-4">
          <div className="relative space-x-4">
            <Search className="h-5 w-8 mx-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="w-[460px] px-10 py-2 bg-inherit rounded-xl border border-[#DADAFC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="text-sm flex mr-2">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <span className="absolute w-4 h-5 text-[#F88080] text-2xl top-0 left-5 rounded-full bg-[#F9F9FB] flex items-center justify-center z-10">
              ●{" "}
            </span>
            <Bell className="w-6 h-6 text-gray-500" />
          </button>
          <div className="flex items-center ml-3">
            <img
              className="h-8 w-8 rounded-full"
              src="/avatar.png"
              alt="Profile"
            />
            <div className="ml-3">
              <p className="text-[#444753] text-sm">Tim Bouwman</p>
              <p className="text-[#8F95A9] text-xs">Alstec Amsterdam</p>
            </div>
            <ChevronDown className="text-[#8F95A9] text-sm ml-7" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
