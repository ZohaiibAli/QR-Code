import QRCard from "./QRCard";
import logo from "../data/logo.jpeg";

const svgProps = {
  width: 28, height: 28, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};
const WebIcon = (
  <svg {...svgProps}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></svg>
);
const MobileIcon = (
  <svg {...svgProps}><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></svg>
);

const WEB_URL = "https://help-ghar-beta.vercel.app/";
const APP_URL =
  "https://expo.dev/accounts/zowd/projects/client/builds/e6d8767c-8b0e-4dc3-a5d4-cebadcd33b6d";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="brand-row">
          <img className="logo" src={logo} alt="Help Ghar logo" />
          <h1 className="brand">Help Ghar</h1>
        </div>
        <h2 className="tagline">Scan. Install. Get Started.</h2>
        <p>Access Help Ghar on the web or download the mobile app in seconds.</p>
      </header>

      <main className="grid">
        <QRCard
          title="Web App"
          subtitle="Open Help Ghar in your browser"
          url={WEB_URL}
          icon={WebIcon}
        />
        <QRCard
          title="Mobile App"
          subtitle="Download the Help Ghar mobile build"
          url={APP_URL}
          icon={MobileIcon}
        />
      </main>

    </div>
  );
}
