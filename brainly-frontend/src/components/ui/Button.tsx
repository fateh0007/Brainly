import React from "react";

type Variants = "primary" | "secondary";
export interface ButtonProps{
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: ()=> void;
    fullWidth?: boolean;
    loading ?: boolean;
}

const variantStyles = {
    "primary": "bg-[#5046e4] text-white",
    "secondary": "bg-[#e0e7fe] text-[#5046e4]"
}

const sizeStyles = {
  "sm":"px-2 py-1",
  "md":"px-4 py-2",
  "lg":"py-4 px-6"
}

const defaultStyles = "rounded-md flex"

export const Button = (props : ButtonProps)=>{
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} 
    ${props.fullWidth ? " w-full items-center justify-center":""} ${props.loading ? "opacity-45":""}`}>
      <div className="flex items-center justify-center cursor-pointer">
        {props.startIcon}
        <div className="pl-2 pr-2">
          {props.text}  
        </div>
        {props.endIcon}
      </div>
    </button>
}

<Button variant="primary" size="md" text="abc" startIcon="+" endIcon="-" onClick={()=>{}} /> 