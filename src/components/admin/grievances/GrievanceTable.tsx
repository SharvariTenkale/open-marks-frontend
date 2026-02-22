import GrievanceRow from "./GrievanceRow";

const dummyData = [
  {
    id: 1,
    exam: "Data Structures - Final",
    student: "Priya Sharma",
    roll: "CS21B1045",
    question: "Q3",
    date: "Feb 18, 2026 16:00",
    status: "pending",
  },
];

const GrievanceTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left">Exam Name</th>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Question</th>
              <th>Date Raised</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {dummyData.map((item) => (
              <GrievanceRow key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col divide-y">
        {dummyData.map((item) => (
          <div key={item.id} className="p-4 space-y-2 text-sm">
            <p className="font-semibold">{item.exam}</p>
            <p>{item.student}</p>
            <p>{item.roll}</p>
            <p>{item.question}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrievanceTable;