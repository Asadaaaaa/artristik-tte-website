export default function SearchInput({ type, placeholder, value, onChange }) {
  return (
    <input
      spellCheck={"false"} 
      className="border border-slate-400 text-slate-900 rounded-full pl-5 pr-11 py-2 focus:outline-sky-500 box-border focus:box-border w-full"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}