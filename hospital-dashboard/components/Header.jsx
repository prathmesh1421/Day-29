import useUIStore from "../zustand/useUIStore";

export default function Header() {
  const { dark, setDark } =
    useUIStore();

  return (
    <header className="header">
      <button onClick={setDark}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
