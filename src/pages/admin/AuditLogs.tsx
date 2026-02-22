import { useEffect, useState } from "react";
import api from "../../api/axios";
interface AuditLog {
  id: string;
  action_type: string;
  entity_type: string;
  entity_id: string;
  old_value: any;
  new_value: any;
  performed_by: string;
  performed_by_name: string;
  performed_by_role: string;
  created_at: string;
}
const AuditLogs = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await api.get("/api/audit-logs");
        setLogs(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch audit logs");
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);
  if (loading) return <p className="p-6">Loading audit logs...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  return (
    <div className="p-6 space-y-6">
      {" "}
      <h2 className="text-2xl font-semibold">Audit Logs</h2>{" "}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        {" "}
        <table className="w-full text-sm">
          {" "}
          <thead className="bg-gray-100 text-gray-700">
            {" "}
            <tr>
              {" "}
              <th className="p-3 text-left">User</th>{" "}
              <th className="p-3 text-left">Role</th>{" "}
              <th className="p-3 text-left">Action</th>{" "}
              <th className="p-3 text-left">Entity</th>{" "}
              <th className="p-3 text-left">Date</th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {logs.map((log) => (
              <tr key={log.id} className="border-t">
                {" "}
                <td className="p-3">{log.performed_by_name}</td>{" "}
                <td className="p-3 capitalize">{log.performed_by_role}</td>{" "}
                <td className="p-3 font-medium">{log.action_type}</td>{" "}
                <td className="p-3">{log.entity_type}</td>{" "}
                <td className="p-3">
                  {" "}
                  {new Date(log.created_at).toLocaleString()}{" "}
                </td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
};
export default AuditLogs;