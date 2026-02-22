interface Props {
  status: string;
}

const GrievanceStatusBadge = ({ status }: Props) => {
  const styles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    "under review": "bg-blue-100 text-blue-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
        styles[status.toLowerCase()] || "bg-gray-200 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default GrievanceStatusBadge;
