const StatusBadge = ({ status }: { status: string }) => {
  const styles: any = {
    draft: "bg-gray-200 text-gray-700",
    scheduled: "bg-blue-100 text-blue-700",
    live: "bg-green-100 text-green-700",
    completed: "bg-purple-100 text-purple-700",
    locked: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[status] || "bg-gray-200 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;