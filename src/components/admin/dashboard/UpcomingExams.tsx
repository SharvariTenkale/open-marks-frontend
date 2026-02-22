import { Calendar, Clock } from "lucide-react";

const UpcomingExams = () => {
  const exams = [
    {
      title: "Computer Science Fundamentals - Midterm",
      date: "Feb 24, 2026",
      time: "10:00 AM",
      days: 3,
    },
    {
      title: "Data Structures & Algorithms - Final",
      date: "Feb 26, 2026",
      time: "2:00 PM",
      days: 5,
    },
    {
      title: "Database Management Systems - Quiz",
      date: "Feb 28, 2026",
      time: "11:30 AM",
      days: 7,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Upcoming Exam Schedule
        </h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:border-blue-500 transition"
          >
            <div>
              <h3 className="font-medium text-gray-800">{exam.title}</h3>
              <div className="flex gap-4 text-sm text-gray-500 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {exam.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {exam.time}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                Scheduled
              </span>
              <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
                ↗ {exam.days} days
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingExams;
