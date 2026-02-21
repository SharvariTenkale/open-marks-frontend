import UpcomingExamCard from "../../components/dashboard/UpcomingExamCard";
import ExamCard from "../../components/dashboard/ExamCard";
import RecentResultsTable from "../../components/dashboard/RecentResultsTable";
import GrievanceOverview from "../../components/dashboard/GrievanceOverview";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-semibold">Welcome, Rahul Sharma</h2>
        <p className="text-gray-500">
          Track your exams, results, and grievances all in one place
        </p>
      </div>

      {/* Upcoming Exam */}
      <UpcomingExamCard />

      {/* Published Exams */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Published Exams</h3>

        <div
          className="grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        xl:grid-cols-3"
        >
          <ExamCard />
          <ExamCard title="Operating Systems" duration="120 mins" />
          <ExamCard title="Computer Networks" status="completed" />
          <ExamCard title="Software Engineering" status="locked" />
          <ExamCard title="Web Technologies" />
          <ExamCard title="Machine Learning" status="locked" />
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="grid gap-6 
                      grid-cols-1 
                      xl:grid-cols-3"
      >
        {/* Results */}
        <div className="xl:col-span-2">
          <RecentResultsTable />
        </div>

        {/* Grievance */}
        <GrievanceOverview />
      </div>
    </div>
  );
};

export default Dashboard;
