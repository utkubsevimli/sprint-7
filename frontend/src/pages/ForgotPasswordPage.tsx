import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";
    setError(found);
    setSent(found === "");
  }

  return (
    <section className="sifremi-unuttum-sayfasi" style={{ maxWidth: "420px", margin: "2rem auto" }}>
      <h2 className="bolum-baslik">Şifremi Unuttum</h2>
      <p style={{ color: "#4a5568", fontSize: "0.9rem", marginBottom: "1rem" }}>
        Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.
      </p>

      {sent && (
        <p
          className="mesaj mesaj-basari"
          style={{
            background: "#f0fff4",
            color: "#22543d",
            border: "1px solid #9ae6b4",
            padding: "0.75rem",
            borderRadius: "6px",
            marginBottom: "1rem",
            fontSize: "0.9rem",
          }}
        >
          Bağlantı {email} adresine gönderildi (demo).
        </p>
      )}

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ali@sdu.edu.tr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
          {error && <span className="hata-metni">{error}</span>}
        </div>

        <button
          type="submit"
          className="buton button"
          style={{ width: "100%", marginTop: "0.5rem" }}
        >
          Bağlantı gönder
        </button>
      </form>

      <div style={{ marginTop: "1.2rem", textAlign: "left", fontSize: "0.875rem" }}>
        <Link to="/login" className="link">
          ← Girişe dön
        </Link>
      </div>
    </section>
  );
}