import { NavLink } from "react-router-dom";
import { FileText } from "lucide-react";

interface Props {
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
}

const ReviewerSidebar = ({ isCollapsed }: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-blue-900 text-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-6 font-bold text-lg">Reviewer</div>

      <NavLink
        to="/reviewer/grievances"
        className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800"
      >
        <FileText size={18} />
        {!isCollapsed && "Grievances"}
      </NavLink>
    </div>
  );
};

export default ReviewerSidebar;