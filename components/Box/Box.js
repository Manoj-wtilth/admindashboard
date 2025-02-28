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
    <div style={{backgroundColor: bgColor, opacity: '0.9'}} className={`p-4 rounded-xl shadow-md text-left flex flex-col w-48 h-44`}>
      {Icon && <Icon className="w-10 h-10 mx-auto text-gray-700 ml-0" />}
      <div className="text-xl font-bold mt-2">{value1}</div>
      <div className="text-lg text-gray-600 mt-2">{value2}</div>
      <div className="text-sm text-blue-800 mt-1 font-bold">{smallText}</div>
    </div>
  );
};

export default Box;
