import { Link } from "react-router-dom";
import { Menu, Home, Users, Stethoscope, Star, Phone } from "lucide-react";

export default function Sidebar({ collapsed, setCollapsed }) {
  const menuItems = [
    { name: "Home", path: "/", icon: <Home /> },
    { name: "Services", path: "/services", icon: <Stethoscope /> },
    { name: "Doctors", path: "/doctors", icon: <Users /> },
    { name: "Reviews", path: "/reviews", icon: <Star /> },
    { name: "Contact", path: "/contact", icon: <Phone /> },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-56"
      } bg-white border-r shadow-md flex flex-col transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-3 hover:bg-gray-100 m-2 rounded-lg"
      >
        <Menu />
      </button>

      {/* Menu Items stacked vertically */}
      <nav className="flex flex-col gap-4 mt-4 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl shadow-sm transition-all"
          >
            {/* Show icon always */}
            <span className="text-gray-700">{item.icon}</span>
            {/* Show text only when not collapsed */}
            {!collapsed && <span className="font-medium">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
