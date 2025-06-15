import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input({ placeholder, ref }: { placeholder: string; ref?: any }) {
  return (
    <div>
      <input 
        placeholder={placeholder} 
        type="text" 
        className="px-4 m-2 py-2 border rounded" 
        ref={ref} 
      />
    </div>
  );
}