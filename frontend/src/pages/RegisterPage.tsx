import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found: RegisterErrors = {};

    // 1. Ad Soyad: En az 3 karakter
    if (name.trim().length < 3) {
      found.name = "Ad Soyad en az 3 karakter olmalı.";
    }

    // 2. E-posta: @ içermeli
    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }

    // 3. Şifre: En az 6 karakter
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }

    // 4. Şifre Tekrar: İlk şifreyle aynı olmalı
    if (password2 !== password) {
      found.password2 = "Şifreler aynı değil.";
    }

    setErrors(found);
    const isValid = Object.keys(found).length === 0;
    setSent(isValid);
  }

  return (
    <section className="kayit-sayfasi" style={{ maxWidth: "420px", margin: "2rem auto" }}>
      <h2 className="bolum-baslik">Kayıt Ol</h2>

      {sent && (
        <p
          className="sonuc"
          style={{
            background: "#e6fffa",
            color: "#234e52",
            padding: "0.75rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        >
          Kayıt başarılı! Gerçek kayıt Sprint 10'da.
        </p>
      )}

      <form className="form" onSubmit={handleSubmit} noValidate>
        {/* Ad Soyad */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Ad Soyad</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Utku Burak Sevimli"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
          {errors.name && <span className="hata-metni">{errors.name}</span>}
        </div>

        {/* E-posta */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="a@b.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
          {errors.email && <span className="hata-metni">{errors.email}</span>}
        </div>

        {/* Şifre */}
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

        {/* Şifre (tekrar) */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="password2">Şifre (tekrar)</label>
          <input
            id="password2"
            name="password2"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            aria-invalid={errors.password2 ? true : undefined}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
          {errors.password2 && <span className="hata-metni">{errors.password2}</span>}
        </div>

        <button
          type="submit"
          className="buton button"
          style={{ width: "100%", marginTop: "0.5rem" }}
        >
          Kayıt ol
        </button>
      </form>

      <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.875rem" }}>
        <Link to="/login" className="link">
          Zaten hesabın var mı? Giriş yap
        </Link>
      </div>
    </section>
  );
}