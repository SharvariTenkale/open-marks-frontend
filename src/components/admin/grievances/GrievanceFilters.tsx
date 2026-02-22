import { X } from "lucide-react";

const GrievanceFilters = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Exams</option>
        </select>

        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Students</option>
        </select>

        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Status</option>
        </select>

        <input
          type="date"
          className="border rounded-lg px-3 py-2 text-sm"
        />

        <input
          type="date"
          className="border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
          <X size={14} />
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default GrievanceFilters;