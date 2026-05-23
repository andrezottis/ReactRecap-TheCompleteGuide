import { children } from "react";

export default function ButtonD({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-300 hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}
