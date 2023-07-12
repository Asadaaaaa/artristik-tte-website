export default function Input({ type, placeholder, maxLength, errorText, value, onChange }) {
  return (
    <div className="flex flex-col">
      <input
        className={"px-5 py-3 rounded-full border text-sm " + (errorText !== "" ? "border-red-500 focus:outline-red-500" : "border-slate-300 focus:outline-sky-500")}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="text-xs text-red-500 mt-1 text-right">{errorText}</p>
    </div>
  )
}