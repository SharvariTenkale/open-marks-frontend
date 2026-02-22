import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Exam {
  id: string;
  name: string;
}

interface Props {
  exams: Exam[];
  selectedExam: Exam;
  onSelect: (exam: Exam) => void;
}

const ExamFilterDropdown = ({ exams, selectedExam, onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-md relative" ref={dropdownRef}>
      <label className="block text-sm font-medium mb-2">
        Select Exam
      </label>

      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center border bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-lg text-left text-sm"
      >
        <span className="truncate">{selectedExam.name}</span>
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white border rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {exams.map((exam) => (
            <div
              key={exam.id}
              onClick={() => {
                onSelect(exam);
                setOpen(false);
              }}
              className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              <span>{exam.name}</span>

              {exam.id === selectedExam.id && (
                <Check size={16} className="text-blue-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamFilterDropdown;