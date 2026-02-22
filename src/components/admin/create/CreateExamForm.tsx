import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createExam } from "../../../api/admin/exam.api";

const CreateExamForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      const scheduledStart = new Date(formData.startDate);
      const scheduledEnd = new Date(formData.endDate);

      // Add 1 minute after exam end
      const grievanceStart = new Date(scheduledEnd.getTime() + 60 * 1000);

      // Add grievanceDays in milliseconds
      const grievanceEnd = new Date(
        grievanceStart.getTime() +
          Number(formData.grievanceDays) * 24 * 60 * 60 * 1000,
      );

      const payload = {
        title: formData.title,
        description: formData.description,
        scheduled_start: scheduledStart.toISOString(),
        scheduled_end: scheduledEnd.toISOString(),
        grievance_start: grievanceStart.toISOString(),
        grievance_end: grievanceEnd.toISOString(),
      };
      const res = await createExam(payload);

      const examId = res.exam.id;

      navigate(`/admin/exams/${examId}/questions`);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    totalMarks: 100,
    duration: 120,
    startDate: "",
    endDate: "",
    grievanceDays: 24,
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Exam Information</h2>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="text-sm font-medium">Exam Title *</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            placeholder="e.g., Mid-Term Examination 2026"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="text-sm font-medium">Subject *</label>
          <input
            type="text"
            name="subject"
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            placeholder="e.g., Computer Science"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows={3}
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            placeholder="Enter exam description or instructions"
          />
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">Total Marks *</label>
            <input
              type="number"
              name="totalMarks"
              value={formData.totalMarks}
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Duration (minutes) *</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Start Date & Time *</label>
            <input
              type="datetime-local"
              name="startDate"
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">End Date & Time *</label>
            <input
              type="datetime-local"
              name="endDate"
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            />
          </div>
        </div>

        {/* Grievance */}
        <div>
          <label className="text-sm font-medium">Grievance Window (days)</label>
          <input
            type="number"
            name="grievanceDays"
            value={formData.grievanceDays}
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Number of days after exam end when students can submit grievances
          </p>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
          <button
            type="button"
            className="border px-6 py-2 rounded-lg hover:bg-gray-50"
          >
            Save as Draft
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Continue to Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateExamForm;
