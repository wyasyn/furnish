export default function Button({ text }: { text: string }) {
  return (
    <button className="px-6 py-2 rounded-lg hover:opacity-75 duration-300 bg-primary text-secondary text-xs">
      {text}
    </button>
  );
}
