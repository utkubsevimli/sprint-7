import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Category, EventFormData, EventFormErrors } from "../../types/campus-event";
import { validateEvent } from "../../utils/validate-event";

interface EventFormProps {
  onSubmit: (data: EventFormData) => void;
  isUpdate?: boolean;
  initialData?: EventFormData;
  submitText?: string;
  onCancel?: () => void;
}

const CATEGORIES: Category[] = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];

const defaultData: EventFormData = {
  title: "",
  category: "",
  capacity: "",
  date: "",
  time: "",
  location: "",
  description: "",
  image: "",
};

function EventForm({
  onSubmit,
  isUpdate = false,
  initialData,
  submitText,
  onCancel,
}: EventFormProps) {
  const [data, setData] = useState<EventFormData>(initialData ?? defaultData);
  const [errors, setErrors] = useState<EventFormErrors>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateEvent(data);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      onSubmit(data);
    }
  }

  const buttonLabel = submitText ?? (isUpdate ? "Güncellemeyi Kaydet" : "Etkinlik Ekle");

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Etkinlik Adı */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="title">Etkinlik Adı:</label>
        <input
          type="text"
          id="title"
          name="title"
          maxLength={80}
          value={data.title}
          onChange={handleChange}
          aria-invalid={errors.title ? true : undefined}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
        {errors.title && <span className="hata-metni">{errors.title}</span>}
      </div>

      {/* Kategori */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="category">Kategori:</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={handleChange}
          aria-invalid={errors.category ? true : undefined}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        >
          <option value="">Kategori Seçin</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && <span className="hata-metni">{errors.category}</span>}
      </div>

      {/* Tarih */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="date">Tarih:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          aria-invalid={errors.date ? true : undefined}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
        {errors.date && <span className="hata-metni">{errors.date}</span>}
      </div>

      {/* Saat */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="time">Saat:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={data.time}
          onChange={handleChange}
          aria-invalid={errors.time ? true : undefined}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
        {errors.time && <span className="hata-metni">{errors.time}</span>}
      </div>

      {/* Yer */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="location">Yer:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={data.location}
          onChange={handleChange}
          aria-invalid={errors.location ? true : undefined}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
        {errors.location && <span className="hata-metni">{errors.location}</span>}
      </div>

      {/* Kontenjan */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="capacity">Kontenjan:</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          value={data.capacity}
          onChange={handleChange}
          aria-invalid={errors.capacity ? true : undefined}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
        {errors.capacity && <span className="hata-metni">{errors.capacity}</span>}
      </div>

      {/* Görsel URL (Opsiyonel) */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="image">Görsel URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={data.image ?? ""}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
      </div>

      {/* Açıklama */}
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="description">Açıklama:</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={data.description}
          onChange={handleChange}
          aria-invalid={errors.description ? true : undefined}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
        {errors.description && (
          <span className="hata-metni">{errors.description}</span>
        )}
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button type="submit">{buttonLabel}</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            İptal
          </button>
        )}
      </div>
    </form>
  );
}

export default EventForm;