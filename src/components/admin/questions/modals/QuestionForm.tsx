import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { addQuestion } from "../../../../api/admin/question.api";

interface Props {
  mode: "add" | "edit";
  onClose: () => void;
}

const QuestionForm = ({ mode, onClose }: Props) => {
  //api
  const location = useLocation();
  const examId = location.state?.examId;
  console.log("Current Exam ID:", examId);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marks, setMarks] = useState(0);
  const [modelAnswer, setModelAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [questionType, setQuestionType] = useState("MCQ");
  const [options, setOptions] = useState([
    { id: 1, text: "", correct: false },
    { id: 2, text: "", correct: false },
  ]);

  const [keywords, setKeywords] = useState([{ id: 1, word: "", marks: "" }]);

  const addOption = () => {
    setOptions([...options, { id: Date.now(), text: "", correct: false }]);
  };

  const removeOption = (id: number) => {
    setOptions(options.filter((opt) => opt.id !== id));
  };

  const addKeyword = () => {
    setKeywords([...keywords, { id: Date.now(), word: "", marks: "" }]);
  };

  const removeKeyword = (id: number) => {
    setKeywords(keywords.filter((k) => k.id !== id));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      if (!examId) {
        setError("Exam ID missing");
        return;
      }

      let payload: any;

      if (questionType === "MCQ") {
        const validOptions = options.filter((o) => o.text.trim() !== "");

        if (validOptions.length < 2) {
          setError("At least 2 options required");
          return;
        }

        const correctOption = validOptions.find((o) => o.correct);

        if (!correctOption) {
          setError("Select correct answer");
          return;
        }

        payload = {
          type: "mcq",
          question_text: description.trim(),
          options: validOptions.map((o) => o.text.trim()),
          correct_answer: correctOption.text,
          max_marks: Number(marks),
        };
      } else {
        const formattedKeyPoints = keywords
          .filter((k) => k.word.trim() !== "")
          .map((k) => ({
            point: k.word.trim(),
            marks: Number(k.marks),
          }));

        const totalMarks = formattedKeyPoints.reduce(
          (sum, k) => sum + k.marks,
          0,
        );

        if (totalMarks !== Number(marks)) {
          setError("Keyword marks must equal total marks");
          return;
        }

        payload = {
          type: "descriptive",
          question_text: description.trim(),
          max_marks: Number(marks),
          model_answer: modelAnswer.trim(),
          key_points: formattedKeyPoints,
        };
      }

      const res = await addQuestion(examId, payload);

      console.log("Added Question:", res);

      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to add question");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <label className="text-sm font-medium">Question Title *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
          placeholder="Enter question title"
        />
      </div>

      {/* Description */}
      <div>
        <label className="text-sm font-medium">Question Description *</label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
          placeholder="Enter detailed question description"
        />
      </div>

      {/* Marks + Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium">Marks Allocation *</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(Number(e.target.value))}
            className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
            placeholder="0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Question Type *</label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
          >
            <option value="MCQ">MCQ</option>
            <option value="Descriptive">Descriptive</option>
          </select>
        </div>
      </div>

      {/* MCQ SECTION */}
      {questionType === "MCQ" && (
        <div className="bg-gray-50 p-4 rounded-xl space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Multiple Choice Options</h3>
            <button
              type="button"
              onClick={addOption}
              className="flex items-center gap-2 text-sm bg-white border px-3 py-1 rounded-lg"
            >
              <Plus size={14} />
              Add Option
            </button>
          </div>

          {options.map((opt, index) => (
            <div
              key={opt.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white p-3 rounded-lg border"
            >
              <input
                type="radio"
                name="correct"
                className="mt-1"
                checked={opt.correct}
                onChange={() =>
                  setOptions(
                    options.map((o) =>
                      o.id === opt.id
                        ? { ...o, correct: true }
                        : { ...o, correct: false },
                    ),
                  )
                }
              />

              <span className="text-sm w-16">Option {index + 1}</span>

              <input
                type="text"
                value={opt.text}
                onChange={(e) =>
                  setOptions(
                    options.map((o) =>
                      o.id === opt.id ? { ...o, text: e.target.value } : o,
                    ),
                  )
                }
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
                placeholder="Enter option text"
              />

              <X
                size={16}
                className="text-red-600 cursor-pointer"
                onClick={() => removeOption(opt.id)}
              />
            </div>
          ))}

          <p className="text-xs text-gray-500">
            Select the radio button to mark the correct answer
          </p>
        </div>
      )}

      {/* DESCRIPTIVE SECTION */}
      {questionType === "Descriptive" && (
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium">Model Answer</label>
            <textarea
              rows={3}
              value={modelAnswer}
              onChange={(e) => setModelAnswer(e.target.value)}
              className="mt-2 w-full border rounded-lg px-4 py-2 text-sm"
              placeholder="Enter model answer for reference"
            />
          </div>

          {/* Keyword Section */}
          <div className="bg-gray-50 p-4 rounded-xl space-y-4">
            <h3 className="font-medium">Keyword Marking Scheme</h3>

            {keywords.map((k) => (
              <div key={k.id} className="flex flex-col sm:flex-row gap-3">
                <input
                  value={k.word}
                  onChange={(e) =>
                    setKeywords(
                      keywords.map((key) =>
                        key.id === k.id
                          ? { ...key, word: e.target.value }
                          : key,
                      ),
                    )
                  }
                  placeholder="Keyword"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
                <input
                  value={k.marks}
                  onChange={(e) =>
                    setKeywords(
                      keywords.map((key) =>
                        key.id === k.id
                          ? { ...key, marks: e.target.value }
                          : key,
                      ),
                    )
                  }
                  placeholder="Marks"
                  className="w-full sm:w-28 border rounded-lg px-3 py-2 text-sm"
                />
                <X
                  size={16}
                  className="text-red-600 cursor-pointer"
                  onClick={() => removeKeyword(k.id)}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addKeyword}
              className="flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-lg"
            >
              <Plus size={14} />
              Add
            </button>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
        <button onClick={onClose} className="border px-5 py-2 rounded-lg">
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
        >
          {mode === "add" ? "Add Question" : "Update Question"}
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
