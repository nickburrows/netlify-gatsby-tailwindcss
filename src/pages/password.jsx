import React, { useState } from "react";
import copy from "copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import { MdSync } from "react-icons/md";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import Seo from "../components/Seo";

const PasswordPage = () => {
  const [passLength, setPassLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);

  // Jalankan fungsi generatePassword() hanya sekali
  const [password, setPassword] = useState(() => generatePassword());
  const [showAlert, setShowAlert] = useState(false);
  const [alertTimeout, setAlertTimeout] = useState();

  function generatePassword(
    characterAmount = passLength,
    includeUpper = includeUppercase,
    includeNumbers = includeNumber,
    includeSymbols = includeSymbol
  ) {
    const UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
    const NUMBER_CHAR = "1234567890";
    const SYMBOL_CHAR = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    let combinedCharacters = LOWERCASE_CHAR;

    if (includeUpper) combinedCharacters += UPPERCASE_CHAR;
    if (includeNumbers) combinedCharacters += NUMBER_CHAR;
    if (includeSymbols) combinedCharacters += SYMBOL_CHAR;

    let password = "";
    for (let i = 0; i < characterAmount; i++) {
      password += combinedCharacters.charAt(
        Math.floor(Math.random() * combinedCharacters.length)
      );
    }

    return password;
  }

  function handleCopy(password) {
    copy(password);
    setShowAlert(true);

    // Bersihkan semua timeout sebelum memulai timeout yang baru
    clearTimeout(alertTimeout);
    setAlertTimeout(window.setTimeout(() => setShowAlert(false), 2500));
  }

  const copyPassword = () => handleCopy(password);

  const reCreate = () => {
    setPassword(
      generatePassword(
        passLength,
        includeUppercase,
        includeNumber,
        includeSymbol
      )
    );
  };

  return (
    <div className="flex flex-row items-center max-w-xl mx-auto">
      <div className="container relative px-3 my-5 dark:selection:bg-slate-100 dark:selection:text-slate-800 sm:px-0">
        {/* Alert */}
        <div
          className="absolute flex items-center justify-center h-10 text-green-700 transition-opacity duration-150 bg-green-100 rounded-lg shadow-md -top-14 w-60 dark:bg-green-200"
          style={{ opacity: showAlert ? 1 : 0 }}
        >
          Copying Password!
        </div>

        <div className="max-w-md px-5 py-10 mb-8 text-center transition-all bg-white rounded-lg shadow-lg dark:bg-slate-800 sm:px-10">
          <label htmlFor="password">
            <h1 className="mb-5 text-2xl font-bold transition-all text-slate-700 dark:text-white sm:text-3xl">
              Password Generator
            </h1>
          </label>

          <div className="flex items-center h-10 mb-5 transition-all sm:h-14">
            <input
              type="text"
              value={password}
              className="w-full h-full p-3 border rounded-l-lg dark:border-slate-900 dark:bg-slate-900 dark:text-slate-100"
              id="password"
              disabled
            />
            <button
              className="flex items-center h-full rounded-r-lg group bg-slate-200 dark:bg-slate-900"
              onClick={reCreate}
            >
              <div className="transition-all text-slate-700 group-hover:scale-105 group-active:scale-95 dark:text-slate-300">
                <MdSync className="w-[45px] h-[20px]" />
              </div>
            </button>
            <ReactTooltip
              place="right"
              effect="solid"
              className="select-none "
            />
          </div>

          {/* Password Strength Meter */}
          <PasswordStrengthMeter password={password} />

          <div className="grid grid-cols-2 gap-2 dark:text-slate-100">
            <label
              htmlFor="password-length"
              className="block mb-2 font-semibold text-left text-gray-900 text-md dark:text-gray-300"
            >
              Password Length
            </label>
            <div className="flex items-center justify-start">
              <input
                type="range"
                id="password-length"
                className="w-4/6 h-2 mr-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                min={1}
                max={50}
                value={passLength}
                onChange={(event) =>
                  setPassLength(parseInt(event.target.value))
                }
              />
              <input
                type="number"
                min={1}
                max={50}
                value={passLength}
                onChange={(event) =>
                  setPassLength(
                    event.target.value === ""
                      ? ""
                      : parseInt(event.target.value)
                  )
                }
                className="block w-2/6 p-2.5 text-gray-900 border border-gray-300 rounded bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                aria-labelledby="password-length"
              />
            </div>

            <label
              htmlFor="include-uppercase"
              className="text-lg font-semibold text-left checkbox-label"
            >
              Capital Letters
            </label>
            <div className="flex justify-start">
              <input
                type="checkbox"
                id="include-uppercase"
                className="w-5 h-5 checkbox"
                defaultChecked={includeUppercase}
                onChange={() =>
                  setIncludeUppercase(
                    (prevIncludeUppercase) => !prevIncludeUppercase
                  )
                }
              />
            </div>

            <label
              htmlFor="include-number"
              className="text-lg font-semibold text-left checkbox-label"
            >
              Number
            </label>
            <div className="flex justify-start">
              <input
                type="checkbox"
                id="include-number"
                className="w-5 h-5 checkbox"
                defaultChecked={includeNumber}
                onChange={() =>
                  setIncludeNumber((prevIncludeNumber) => !prevIncludeNumber)
                }
              />
            </div>

            <label
              htmlFor="include-symbol"
              className="text-lg font-semibold text-left checkbox-label"
            >
              Symbol
            </label>
            <div className="flex justify-start">
              <input
                type="checkbox"
                id="include-symbol"
                className="w-5 h-5 checkbox"
                defaultChecked={includeSymbol}
                onChange={() =>
                  setIncludeSymbol((prevIncludeSymbol) => !prevIncludeSymbol)
                }
              />
            </div>
          </div>
          <button
            className="w-full p-3 mt-3 font-bold transition-all rounded shadow bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-100 hover:scale-105 active:scale-100 dark:bg-slate-900 dark:text-slate-100 dark:shadow-none"
            onClick={copyPassword}
            data-tip="Copy"
            aria-label="Copy"
          >
            Copy Password
          </button>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Password Generator" />;

export default PasswordPage;
