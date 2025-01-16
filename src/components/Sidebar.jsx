import { clsx } from "clsx";
import {
  LogOut,
  Settings,
  LayoutGrid,
  Mail,
  CalendarMinus2,
  SquareUserRound,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.substring(1) || "settings";

  const items = [
    { icon: LayoutGrid, label: "DASHBOARD", count: 0, id: "dashboard" },
    { icon: Mail, label: "INBOX", count: 2, id: "inbox" },
    { icon: CalendarMinus2, label: "SCHEDULE", count: 0, id: "schedule" },
    { icon: SquareUserRound, label: "REVIEWS", count: 6, id: "reviews" },
    { icon: Settings, label: "SETTINGS", count: 0, id: "settings" },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <>
      <div className="w-24 bg-[#F9F9FB] flex flex-col relative">
        <nav className="flex-1 pl-1 py-4 space-y-1">
          {items.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "relative",
                currentPath === item.id && "active-item"
              )}
            >
              <button
                onClick={() => navigate(`/${item.id}`)}
                className={clsx(
                  "w-full relative flex flex-col items-center py-4 text-sm font-medium",
                  currentPath === item.id
                    ? "text-[#6968EC]"
                    : "text-[#8F95A9] hover:text-blue-400"
                )}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-[9px] z-40">{item.label}</span>
                {item.count > 0 && (
                  <span className="absolute right-5 top-2 text-white bg-[#F88080] px-1.5 rounded-full text-xs z-40">
                    {item.count}
                  </span>
                )}
              </button>
            </div>
          ))}
        </nav>
        <div className="p-2">
          <button
            onClick={handleLogout}
            className="w-full flex flex-col items-center py-4 text-[#8F95A9] hover:text-blue-400"
          >
            <LogOut className="w-6 h-6 mb-2" />
            <span className="text-[9px]">LOGOUT</span>
          </button>
        </div>
      </div>
    </>
  );
}
