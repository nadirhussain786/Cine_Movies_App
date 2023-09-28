import React from "react";


export const MovieKeywords = ({data}) => {
  
  return <div className="keywords">
  {data?.keywords.slice(0, 5).map((currValue) => (
    <span>{currValue.name}</span>
  ))}
</div>;
};
