import React from "react";

export interface CertificationCardProps {
  image: string;
  title: string;
  description: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center space-y-4">
      <img src={image} alt={title} className="w-20 h-20 object-cover rounded" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
