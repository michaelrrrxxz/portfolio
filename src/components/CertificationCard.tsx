import React from "react";

export interface CertificationCardProps {
  image: string;
  title: string;
  description?: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center space-y-5 h-full">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-contain rounded-md"
      />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm px-2">{description}</p>
      )}
    </div>
  );
};
