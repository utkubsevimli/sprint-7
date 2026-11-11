import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface LoginErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found: LoginErrors = {};

    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }

    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }

    setErrors(found);
    const isValid = Object.keys(found).length === 0;
    setSent(isValid);
  }

  return (
    <section className="login-sayfasi" style={{ maxWidth: "420px", margin: "2rem auto" }}>
      <h2 className="bolum-baslik">Giriş Yap</h2>

      {sent && (
        <p className="sonuc" style={{ background: "#e6fffa", color: "#234e52", padding: "0.75rem", borderRadius: "6px", marginBottom: "1rem" }}>
          Gerçek giriş Sprint 10'da
        </p>
      )}

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
          {errors.email && <span className="hata-metni">{errors.email}</span>}
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
          {errors.password && <span className="hata-metni">{errors.password}</span>}
        </div>

        <button type="submit" className="buton button" style={{ width: "100%", marginTop: "0.5rem" }}>
          Giriş yap
        </button>
      </form>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", fontSize: "0.875rem" }}>
        <Link to="/forgot-password" className="link">
          Şifremi unuttum
        </Link>
        <Link to="/register" className="link">
          Hesabın yok mu? Kayıt ol
        </Link>
      </div>
    </section>
  );
}