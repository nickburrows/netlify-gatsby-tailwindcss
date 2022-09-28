import React from "react";
const zxcvbn = require("zxcvbn");

const PasswordStrengthMeter = ({ password }) => {
  const getPasswordScore = (password) => {
    if (password.length >= 12) {
      return 4;
    }
    const checkPassword = zxcvbn(password);
    return checkPassword.score;
  };

  const score = getPasswordScore(password);

  const passwordProps = () => {
    switch (score) {
      case 0:
        return {
          color: ["#94a3b8", "#64748b"],
          label: "Too weak",
        };
      case 1:
        return {
          color: ["#f87171", "#dc2626"],
          label: "Weak",
        };
      case 2:
        return {
          color: ["#facc15", "#f59e0b"],
          label: "Reasonable",
        };
      case 3:
        return {
          color: ["#a3e635", "#10b981"],
          label: "Good",
        };
      case 4:
        return {
          color: ["#10b981", "#059669"],
          label: "Strong",
        };
      default: {
        return {
          color: ["#e2e8f0", "#e2e8f0"],
          label: "Too Weak",
        };
      }
    }
  };

  return (
    <div className="w-full h-2 mb-8 rounded-full bg-slate-200 dark:bg-slate-900">
      <div
        className="h-full transition-all rounded-full"
        style={{
          width: `${(score * 100) / 4}%`,
          background: `linear-gradient(to right, ${passwordProps().color[0]}, ${
            passwordProps().color[1]
          })`,
        }}
      ></div>
      <p
        className="text-sm text-right"
        style={{ color: passwordProps().color[1] }}
      >
        {passwordProps().label}
      </p>
    </div>
  );
};

export default PasswordStrengthMeter;
