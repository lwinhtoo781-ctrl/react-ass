import { useSettings } from "../context/SettingsContext.jsx";


export default function PreviewCard() {
  const { theme, language } = useSettings();

  const msg =
    language === "th"
      ? "นี่คือหน้าตัวอย่างการตั้งค่า"
      : "This is your preference preview.";

  return (
    <section className="card">
      <h2>{language === "th" ? "ตัวอย่าง" : "Preview"}</h2>

      <div className="kv">
        <div className="k">{language === "th" ? "ธีมปัจจุบัน" : "Current Theme"}</div>
        <div className="v">{theme}</div>

        <div className="k">{language === "th" ? "ภาษาปัจจุบัน" : "Current Language"}</div>
        <div className="v">{language}</div>
      </div>

      <p className="sample">{msg}</p>
    </section>
  );
}
