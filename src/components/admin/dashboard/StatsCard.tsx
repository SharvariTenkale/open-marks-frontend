import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  bgColor: string;
}

const StatsCard = ({ icon, value, label, bgColor }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgColor}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{value}</h3>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
};

export default StatsCard;
