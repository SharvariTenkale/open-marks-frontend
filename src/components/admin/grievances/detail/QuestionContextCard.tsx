import { BookOpen } from "lucide-react";

const QuestionContextCard = () => {
  return (
    <div className="bg-white rounded-xl border p-6 space-y-6">
      <div className="flex items-center gap-3">
        <BookOpen size={18} />
        <h2 className="font-semibold text-lg">Question Context</h2>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-gray-500 mb-2">Question Text</p>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            Explain the concept of balanced binary search trees...
          </div>
        </div>

        <div>
          <p className="text-gray-500 mb-2">Student Answer</p>
          <div className="bg-gray-50 border p-4 rounded-lg">
            A balanced binary search tree is a self-balancing...
          </div>
        </div>

        <div>
          <p className="text-gray-500 mb-2">Model Answer</p>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            A balanced BST maintains O(log n) operations...
          </div>
        </div>

        <div className="text-sm font-medium">
          Marks Awarded: <span className="text-blue-600">6/10</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionContextCard;