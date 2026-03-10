'use client';
import { useFormContext } from "react-hook-form";
import { useState, useRef, useEffect } from "react";

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
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selected = watch(name);
  const error = errors[name as keyof typeof errors];

  const selectedLabel = options.find((o) => o.value === selected)?.label;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (value: string) => {
    setValue(name, value, { shouldValidate: true });
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full ">
      {/* Wrapper must be relative so the absolute list anchors to it */}
      <div className="relative w-full" ref={dropdownRef}>
        {/* Trigger button */}
        <div
          tabIndex={0}
          role="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`
            flex items-center justify-between
            w-full px-4 py-3 rounded-lg
            border cursor-pointer outline-none
            bg-[radial-gradient(ellipse_at_center,#022052,#071939)]
            text-lg select-none
            ${error ? "border-rose-500" : "border-[#104680]"}
            ${selectedLabel ? "text-[#C0CADF]" : "text-[#C0CADF]/60"}
          `}
        >
          <span>{selectedLabel ?? placeholder}</span>
          <svg
            className={`w-4 h-4 text-[#C0CADF] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Absolutely positioned list — does NOT affect parent height */}
        {open && (
          <ul
            className="
             top-full left-0 w-full mt-1
              z-100
              rounded-lg border border-[#104680]
              bg-[#071939]
              shadow-[0_8px_32px_rgba(0,0,0,0.5)]
              p-1
              max-h-42 overflow-y-auto hide-scroll
            "
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`
                    hover:cursor-pointer w-full text-left text-lg px-4 py-2 rounded-md
                    text-[#C0CADF] hover:bg-[#104680]/40 hover:text-white
                    transition-colors duration-150
                    ${selected === opt.value ? "bg-[#104680]/30 text-white" : ""}
                  `}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && (
        <span className="text-xs text-rose-400">
          {error.message as string}
        </span>
      )}
    </div>
  );
}