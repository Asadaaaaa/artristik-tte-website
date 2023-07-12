export default function Card({ children }) {
  return (
    <div className="flex flex-col w-[600px] px-6 py-9 bg-white rounded-3xl">
      {children}
    </div>
  );
}