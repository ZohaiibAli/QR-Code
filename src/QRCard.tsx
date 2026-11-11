import type { ReactNode } from "react";
import { QRCodeCanvas } from "qrcode.react";

interface QRCardProps {
  title: string;
  subtitle: string;
  url: string;
  icon: ReactNode;
}

export default function QRCard({ title, subtitle, url, icon }: QRCardProps) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">{icon}</div>
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="qr-wrap">
        <QRCodeCanvas value={url} size={640} level="H" marginSize={2} fgColor="#0b3d2e" bgColor="#ffffff" className="qr" />
      </div>
    </article>
  );
}
