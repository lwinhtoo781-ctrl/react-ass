import Header from "./components/Header";
import PreviewCard from "./components/PreviewCard.jsx";


import SettingsPanel from "./components/SettingsPanel";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="grid">
        <SettingsPanel />
        <PreviewCard />
      </div>
      <footer className="muted foot">Saved in localStorage: <code>app-settings</code></footer>
    </div>
  );
}
