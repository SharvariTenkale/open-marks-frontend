const DeleteQuestionModal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-3">Delete Question</h2>
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to delete this question? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="border px-4 py-2 rounded-lg">
            Cancel
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuestionModal;