import React from "react";

const Box= ({
  icon : Icon,
  value1,
  value2,
  smallText,
  bgColor,
}) => {
  console.log('BG', bgColor); 
  return (
    <div className={`${bgColor} p-4 rounded-xl shadow-md text-left flex flex-col w-36`}>
      {Icon && <Icon className="w-10 h-10 mx-auto text-gray-700 ml-0" />}
      <div className="text-xl font-bold mt-2">{value1}</div>
      <div className="text-lg text-gray-600">{value2}</div>
      <div className="text-sm text-blue-500 mt-1">{smallText}</div>
    </div>
  );
};

export default Box;
