import { useSettings } from "../context/SettingsContext.jsx";


export default function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <section className="card">
      <h2>{language === "th" ? "การตั้งค่า" : "Settings"}</h2>

      <div className="row">
        <div className="block">
          <div className="label">{language === "th" ? "ธีม" : "Theme"}</div>
          <div className="btn-group">
            <button
              className={theme === "light" ? "btn active" : "btn"}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <button
              className={theme === "dark" ? "btn active" : "btn"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>
        </div>

        <div className="block">
          <div className="label">{language === "th" ? "ภาษา" : "Language"}</div>
          <div className="btn-group">
            <button
              className={language === "en" ? "btn active" : "btn"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              className={language === "th" ? "btn active" : "btn"}
              onClick={() => setLanguage("th")}
            >
              TH
            </button>
          </div>
        </div>
      </div>

      <div className="row end">
        <button className="btn danger" onClick={resetSettings}>
          {language === "th" ? "รีเซ็ต" : "Reset"}
        </button>
      </div>
    </section>
  );
}
