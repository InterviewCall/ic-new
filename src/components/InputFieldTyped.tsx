'use client';
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
}

export default function InputFieldTyped({
  name,
  type = "text",
  placeholder,
}: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name as keyof typeof errors];

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {/* <label className="text-xs font-semibold tracking-widest uppercase text-slate-400">
        {label}
      </label> */}

      <div className="w-full">
        <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`border border-[#104680] w-full bg-radial from-[#022052] to-[#071939] placeholder:text-[#C0CADF] placeholder:text-lg  rounded-lg px-4 py-3 outline-none
          ${error ? "border-rose-500" : "border-slate-700"}
        `}
      />
      </div>

      {error && (
        <span className="text-xs text-rose-400">
          {error.message as string}
        </span>
      )}
    </div>
  );
}
