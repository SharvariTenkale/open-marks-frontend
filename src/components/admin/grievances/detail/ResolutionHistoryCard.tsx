// import { useState } from "react";
// import { CheckCircle, XCircle } from "lucide-react";

// const ResolutionPanel = () => {
//   const [decision, setDecision] = useState<"approve" | "reject" | null>(null);
//   const [confirmed, setConfirmed] = useState(false);

//   return (
//     <div className="bg-white rounded-xl border p-6 space-y-6 sticky top-6">
//       <h2 className="font-semibold text-lg">Resolution Section</h2>

//       {/* Decision Buttons */}
//       <div className="flex flex-col md:flex-row gap-4">
//         <button
//           onClick={() => setDecision("approve")}
//           className={`flex-1 border rounded-lg p-4 flex items-center justify-center gap-2 transition
//             ${
//               decision === "approve"
//                 ? "bg-green-100 border-green-600 text-green-700"
//                 : "hover:bg-gray-50"
//             }`}
//         >
//           <CheckCircle size={18} />
//           Approve Grievance
//         </button>

//         <button
//           onClick={() => setDecision("reject")}
//           className={`flex-1 border rounded-lg p-4 flex items-center justify-center gap-2 transition
//             ${
//               decision === "reject"
//                 ? "bg-red-100 border-red-600 text-red-700"
//                 : "hover:bg-gray-50"
//             }`}
//         >
//           <XCircle size={18} />
//           Reject Grievance
//         </button>
//       </div>

//       {/* Admin Response */}
//       <div>
//         <p className="text-sm text-gray-500 mb-2">Admin Response *</p>
//         <textarea
//           className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500"
//           rows={4}
//           placeholder="Provide a detailed explanation..."
//         />
//       </div>

//       {/* Confirm */}
//       <div className="flex items-start gap-3 text-sm">
//         <input
//           type="checkbox"
//           checked={confirmed}
//           onChange={() => setConfirmed(!confirmed)}
//         />
//         <p>
//           I confirm this decision will be permanently recorded.
//         </p>
//       </div>

//       <button
//         disabled={!decision || !confirmed}
//         className="w-full bg-blue-700 text-white py-3 rounded-lg disabled:opacity-40"
//       >
//         Submit Resolution
//       </button>
//     </div>
//   );
// };

// export default ResolutionPanel;