import { Bell } from "lucide-react";
const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white border-b">
      <button
        className="lg:hidden mr-3"
        onClick={() => window.dispatchEvent(new Event("openSidebar"))}
      ></button>
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            R
          </div>
          <div>
            <p className="text-sm font-medium">Rahul Sharma</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
