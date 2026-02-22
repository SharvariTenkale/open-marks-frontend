import QuestionForm from "./QuestionForm";
import { X } from "lucide-react";

const AddQuestionModal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add New Question</h2>
          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <QuestionForm mode="add" onClose={onClose} />
      </div>
    </div>
  );
};

export default AddQuestionModal;