import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="error-box">
      <h2>404 - Sayfa Bulunamadı</h2>
      <p>Aradığınız sayfa mevcut değil.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </section>
  );
}