import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import CreateExamNotice from "../../components/admin/create/CreateExamNotice";
import CreateExamForm from "../../components/admin/create/CreateExamForm";

const CreateExam = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <AdminTopbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Create New Exam
            </h1>
            <p className="text-gray-500 text-sm">
              Enter the basic details for your exam. All fields are required.
            </p>
          </div>

          <CreateExamNotice />
          <CreateExamForm />
        </main>
      </div>
    </div>
  );
};

export default CreateExam;
