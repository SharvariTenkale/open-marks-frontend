import { AlertCircle } from "lucide-react";

const CreateExamNotice = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-400 rounded-xl p-5 flex gap-3">
      <AlertCircle className="text-yellow-600 mt-1" size={20} />
      <div>
        <p className="font-medium text-yellow-700">Important Notice</p>
        <p className="text-sm text-yellow-700">
          This exam can be edited only while in Draft status. Once published,
          modifications will be locked.
        </p>
      </div>
    </div>
  );
};

export default CreateExamNotice;