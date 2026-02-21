import { CalendarDays, Clock, AlertCircle } from "lucide-react";

const UpcomingExamCard = () => {
  return (
   <div className="bg-yellow-100 border-l-4 border-orange-500 rounded-xl p-6 
                flex flex-col sm:flex-row 
                sm:justify-between sm:items-start 
                gap-4">
      {/* Left */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-orange-600 font-semibold">
          <AlertCircle size={18} />
          <span>Upcoming Exam</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800">
          Data Structures and Algorithms - Mid Term
        </h3>

        <div className="flex items-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>February 25, 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>10:00 AM - 12:00 PM</span>
          </div>
        </div>
      </div>

      {/* Right Badge */}
      <div className="sm:self-start self-start">
        <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
          3d 15h remaining
        </span>
      </div>
    </div>
  );
};

export default UpcomingExamCard;
