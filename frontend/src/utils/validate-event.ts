import type { EventFormData, EventFormErrors } from "../types/campus-event";

export function validateEvent(data: EventFormData): EventFormErrors {
  const errors: EventFormErrors = {};

  // 1. Etkinlik adı: En az 3 karakter
  if (data.title.trim().length < 3) {
    errors.title = "En az 3 karakter olmalı.";
  }

  // 2. Kategori: Seçilmiş olmalı
  if (data.category === "") {
    errors.category = "Bir kategori seçin.";
  }

  // 3. Tarih: Boş olamaz
  if (!data.date.trim()) {
    errors.date = "Tarih alanı boş bırakılamaz.";
  }

  // 4. Saat: Boş olamaz
  if (!data.time.trim()) {
    errors.time = "Saat alanı boş bırakılamaz.";
  }

  // 5. Yer: Boş olamaz
  if (!data.location.trim()) {
    errors.location = "Yer alanı boş bırakılamaz.";
  }

  // 6. Kontenjan: 1-1000 arası tam sayı
  const capacity = Number(data.capacity);
  if (!Number.isInteger(capacity) || capacity < 1 || capacity > 1000) {
    errors.capacity = "1 ile 1000 arası tam sayı olmalıdır.";
  }

  // 7. Açıklama: En az 10 karakter
  if (data.description.trim().length < 10) {
    errors.description = "Açıklama en az 10 karakter olmalıdır.";
  }

  return errors;
}