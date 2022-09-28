import React, { useRef, useState, Fragment } from "react";
import Seo from "../components/Seo";
import { generatePwd } from "../components/PasswordGenerator";
// import { ToggleSwitch } from "flowbite-react";

const myToggle = toggleData.map((data, i) => (
  <Fragment key={i}>
    <div className="flex items-center w-full mb-5">
      <label htmlFor={name} className="flex items-center w-full cursor-pointer">
        <span className="mr-2 font-medium text-gray-500 sm:mr-10 text-md sm:text-2xl">
          {data.label}
        </span>
        <div className="relative ml-auto">
          <input
            type="checkbox"
            defaultValue
            id={data.name}
            className="sr-only peer"
            onChange={handleCheck}
            ref={data.reference}
            value={data.reference}
          />
          <div className="w-14 h-8 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        </div>
      </label>
    </div>
  </Fragment>
));

// const CheckList = () => {
//   const [checked, setChecked] = useState([]);
//   const checkList = ["Apple", "Banana", "Tea", "Coffee"];

//   // Add/Remove checked item from list
//   const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };

//   // Generate string of checked items
//   const checkedItems = checked.length
//     ? checked.reduce((total, item) => {
//         return total + ", " + item;
//       })
//     : "";

//   // Return classes based on whether item is checked
//   var isChecked = (item) =>
//     checked.includes(item) ? "ml-[10px] line-through" : "ml-[10px]";

//   return (
//     <>
//       <div className="checkList">
//         <div className={styles.checkListTitle}>Your CheckList:</div>
//         <div className={styles.listContainer}>
//           {checkList.map((item, index) => (
//             <div key={index}>
//               <input value={item} type="checkbox" onChange={handleCheck} />
//               <span className={isChecked(item)}>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>{`Items checked are: ${checkedItems}`}</div>
//     </>
//   );
// };

const TestPage = () => {
  const hasNumbers = useRef();
  const hasSymbols = useRef();
  const hasUpperCase = useRef();
  const hasLowerCase = useRef();

  const count = useRef();
  const password = useRef();
  const form = useRef();
  const copyBtn = useRef();
  const strength = useRef();

  const [badgeColor, setBadgeColor] = useState("");

  // Error States
  const [countError, setCountError] = useState(false);
  const [copyError, setCopyError] = useState(true);
  const [checkedError, setCheckedError] = useState(false);

  // Toggle Data
  let toggleData = [
    { label: "Include Numbers", name: "numbers", reference: hasNumbers },

    { label: "Include Symbols", name: "symbols", reference: hasSymbols },

    { label: "Include Uppercase", name: "uppercase", reference: hasUpperCase },

    { label: "Include Lowercase", name: "lowercase", reference: hasLowerCase },
  ];

  // Method Called on click of Generate Button
  const generatePassword = () => {
    setCountError(false);
    setCheckedError(false);
    password.current.textContent = "";
    strength.current.textContent = "";
    setBadgeColor("");
    if (copyBtn.current) {
      copyBtn.current.textContent = "Copy";
    }
    if (count.current.value === "") {
      count.current.value = "8";
    }
    if (+count.current.value < 8 || +count.current.value > 64) {
      setCountError(true);
    } else if (
      !(
        hasSymbols.current.checked ||
        hasNumbers.current.checked ||
        hasUpperCase.current.checked ||
        hasLowerCase.current.checked
      )
    ) {
      setCheckedError(true);
    } else {
      let returnedObj = generatePwd(
        hasNumbers.current.checked,
        hasSymbols.current.checked,
        hasLowerCase.current.checked,
        hasUpperCase.current.checked,
        +count.current.value
      );
      setCopyError(false);
      password.current.textContent = returnedObj.password;
      strength.current.textContent = returnedObj.passwordStrength;
      setBadgeColor(returnedObj.badgeColor);
    }
  };

  // Method called on click of Copy Button
  const copyPassword = () => {
    if (password.current.textContent !== "") {
      navigator.clipboard.writeText(password.current.textContent);
      copyBtn.current.textContent = "Copied!";
    } else {
      setCopyError(true);
    }
  };

  const [checkedState, setCheckedState] = useState(
    new Array(toggleData.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "ml-[10px] line-through" : "ml-[10px]";

  return (
    <div className="h-full bg-[#0e1728]">
      <div className="max-w-3xl mx-auto">
        <header className="pt-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-center text-white underline sm:text-5xl lg:text-6xl underline-offset-8 decoration-sky-500 decoration-wavy decoration-2">
            Password Generator
          </h1>
        </header>

        <main className="main mx-auto mt-20 px-4 py-10 bg-[#131b2e] w-[90%] sm:w-[75%] text-center rounded flex flex-col items-center text-white">
          <div
            className="relative resize-none text-s flex items-center justify-center text-center h-[100px] w-[90%]  ring-slate-900/10 shadow-sm rounded-md bg-slate-800 ring-0 highlight-white/5 mb-10 cursor-pointer"
            disabled
            rows="3"
            spellCheck="false"
          >
            <span
              className={`absolute top-2 left-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-10 rounded-full ${badgeColor}`}
              ref={strength}
            ></span>

            <p ref={password} className="w-full px-2 break-words"></p>
          </div>

          <div className="px-10">
            <form ref={form}>
              {myToggle}
              {/* {toggleData.map((data, i) => (
                <div key={i} className="flex items-center w-full mb-5">
                  <label
                    htmlFor={data.name}
                    className="flex items-center w-full cursor-pointer"
                  >
                    <div className="mr-2 font-medium text-gray-500 sm:mr-10 text-md sm:text-2xl">
                      {data.label}
                    </div>
                    <div className="relative ml-auto">
                      <input
                        type="checkbox"
                        id={data.name}
                        className="sr-only"
                        name={data.name}
                        ref={data.reference}
                      />
                      <div className="block h-8 bg-gray-600 rounded-full w-14"></div>
                      <div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"></div>
                    </div>
                  </label>
                </div>
              ))} */}
              <div className="flex items-center justify-center w-full mb-5">
                <label
                  htmlFor="count"
                  className="flex items-center justify-center w-full"
                >
                  <div className="mr-2 font-medium text-gray-500 sm:mr-10 text- sm:text-2xl">
                    Characters
                  </div>
                  <input
                    type="number"
                    id="count"
                    name="count"
                    min="8"
                    max="64"
                    className="ml-auto text-s p-2 w-[50px] sm:w-[100px] ring-slate-900/10 shadow-sm rounded-md bg-slate-800 ring-0 highlight-white/5"
                    onChange={() => setCountError(false)}
                    ref={count}
                    placeholder="8"
                    required
                  />
                </label>
              </div>
            </form>
          </div>
          {countError && (
            <p className="text-red-600">Enter a number between 8 and 64!</p>
          )}

          {checkedError && (
            <p className="text-red-600">
              Enable at least one of the four options to generate a password!
            </p>
          )}
          <div className="flex gap-10">
            <button
              className="px-4 py-2 mt-10 text-white rounded-lg bg-sky-500 hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-sky-700 hover:none"
              onClick={generatePassword}
            >
              Generate
            </button>

            {!copyError && (
              <button
                className="px-4 py-2 mt-10 text-white border-2 rounded-lg border-sky-500"
                onClick={copyPassword}
                ref={copyBtn}
              >
                Copy
              </button>
            )}
          </div>
        </main>
      </div>

      <hr className="mt-20 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <span className="block py-10 text-sm text-center text-gray-500 dark:text-gray-400">
        Created by{" "}
        <a
          className="underline decoration-sky-500 decoration-wavy decoration-2"
          href="https://github.com/itsarvindhere"
        >
          Arvind Rana
        </a>
      </span>
    </div>
  );
};

export const Head = () => <Seo title="Test Page" />;

export default TestPage;
