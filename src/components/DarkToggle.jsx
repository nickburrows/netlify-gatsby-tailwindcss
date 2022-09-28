import React from "react";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

const DarkToggle = ({ toggle, isDark }) => {
  return (
    <>
      <button
        className="p-2 text-yellow-300 bg-gray-800 border rounded-md dark:bg-slate-700 dark:text-white dark:border-gray-100 hover:border-teal-400 hover:dark:border-cyan-300 hover:dark:text-cyan-300 dark-mode-toggle"
        onClick={toggle}
      >
        {!isDark ? <MdOutlineNightlight /> : <MdOutlineLightMode />}
      </button>
    </>
  );
};

export default DarkToggle;
