'use client';
import { useFormContext } from "react-hook-form";

interface SelectFieldProps {
  name: string;
  placeholder?: string;
  options: { label: string; value: string }[];
}

export default function InputFieldDropdown({
  name,
  placeholder = "Select an option",
  options,
}: SelectFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name as keyof typeof errors];

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="w-full relative">
        {/* Custom chevron icon */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <svg
            className="w-4 h-4 text-[#C0CADF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <select
          {...register(name)}
          defaultValue=""
          className={`
            appearance-none border border-[#104680] w-full
            bg-radial from-[#022052] to-[#071939]
            text-[#C0CADF] text-lg
            rounded-lg px-4 py-3 outline-none
            cursor-pointer
            ${error ? "border-rose-500" : "border-slate-700"}
          `}
        >
          {/* Placeholder option */}
          <option value="" disabled className="text-[#C0CADF] bg-[#071939]">
            {placeholder}
          </option>

          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="text-white bg-[#071939]"
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <span className="text-xs text-rose-400">
          {error.message as string}
        </span>
      )}
    </div>
  );
}