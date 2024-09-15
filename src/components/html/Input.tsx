import React, { useState } from "react";

type InputProps = React.ComponentProps<"input">;

const inputStyles: React.CSSProperties = {
  padding: "10px 15px",
  borderRadius: "8px",
  outline: "none",
  border: "1px solid #8566E4",
  fontSize: "1.1rem",
  color: "gray",
  transition: "border-color 0.3s ease", 
};

export const CustomInput = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <input
        style={{
          ...inputStyles,
          border: isFocused ? "2px solid #8566E4" : "1px solid #8566E4", 
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
};
