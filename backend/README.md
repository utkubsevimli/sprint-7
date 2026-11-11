# Backend API — REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GET | `/events` | Listeyi getir | 200 | — | Bu sprint |
| GET | `/events/:id` | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | `/events` | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | `/events/:id` | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Sil | 204 | 404 | Sprint 9 |

## Status Code'lar

- **200** tamam
- **201** oluşturuldu
- **204** içerik yok
- **400** eksik/yanlış veri
- **404** bulunamadı

## Hata Yanıt Biçimi

Bütün hatalar aynı biçimde döndürülür:

```json
{ "error": { "message": "Event not found" } }
```
