import { useState, useRef } from "react"

export default function Input({ type, placeholder, maxLength, errorText, value, onChange }) {

  const [hideDateLabel, setHideDateLabel] = useState(false);
  const dateRef = useRef(null);

  return (
    <div className="flex flex-col">
      {
        type === "text" && (
          <input
            spellCheck={"false"}
            className={"px-5 py-3 rounded-full border text-sm " + (errorText !== "" ? "border-red-500 focus:outline-red-500" : "border-slate-300 focus:outline-sky-500")}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )
      }
      {
        type === "date" && (
          <div className="relative flex items-center">
            <input
              ref={dateRef}
              className={"w-full px-5 py-3 rounded-full border text-sm cursor-text " + (errorText !== "" ? "border-red-500 focus:outline-red-500" : "border-slate-300 focus:outline-sky-500")}
              type={type}
              value={value}
              onChange={(e) => {
                onChange(e);
                
                if (e.target.value === "") {
                  setHideDateLabel(false);
                }
              }}
              onClick={() => setHideDateLabel(true)}
            />
            {
              !hideDateLabel && (
                <div 
                  className="absolute pr-10 bg-white text-gray-400 text-sm left-5"
                  onClick={() => {
                    setHideDateLabel(true);
                    dateRef.current.focus();
                  }}
                >
                  Tanggal Lahir
                </div>
              )
            }
          </div>
        )
      }
      <p className="text-xs text-red-500 mt-1 text-right">{errorText}</p>
    </div>
  )
}