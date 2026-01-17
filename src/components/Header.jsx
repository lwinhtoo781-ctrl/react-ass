import { useSettings } from "../context/SettingsContext.jsx";


export default function Header() {
  const { language } = useSettings();

  const title = language === "th" ? "ยินดีต้อนรับ" : "Welcome";

  return (
    <header className="card header">
      <h1>{title}</h1>
      <p className="muted">
        {language === "th" ? "เลือกธีมและภาษาได้ทันที" : "Instant theme & language switching"}
      </p>
    </header>
  );
}
