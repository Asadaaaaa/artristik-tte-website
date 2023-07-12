export default function Button({ text, disabled, onClick }) {
  return (
    <button
      className={"w-fit min-w-[120px] h-10 bg-sky-500 text-white font-medium px-5 rounded-full " + (disabled ? "cursor-not-allowed" : "")}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}