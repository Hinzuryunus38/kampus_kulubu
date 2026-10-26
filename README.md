# Kampüs Fotoğraf Kulübü

BPR201 - İnternet Tabanlı Programlama | Haftalık Proje Ödevi 1

**Öğrenci:** Yunus Emre Baran
**Öğrenci No:** 25015221011
**Bölüm:** Bilgisayar Programcılığı, Bartın Üniversitesi
**Repository:** https://github.com/Hinzuryunus38/kampus_kulubu

## Projenin amacı

Kampüs Fotoğraf Kulübü, fotoğraf öğrenmek ve kampüsü karelerle belgelemek isteyen öğrenciler için hazırlanmış üç sayfalık statik bir web sitesidir. Sitenin amacı kulüp etkinliklerini duyurmak ve etkinlikleri başlığa göre aranabilir hale getirmektir.

Site; HTML, CSS ve JavaScript ile hazırlanmıştır. Backend, database, API ve kullanıcı girişi içermez. Etkinlik kayıtları HTML içindedir, arama tarayıcıda JavaScript ile çalışır. Geliştirme sürecinde GitHub Codespaces ve GitHub Copilot desteği kullanılmıştır.

## Sayfalar

| Dosya | Açıklama |
|---|---|
| `index.html` | Ana Sayfa: site başlığı, kısa tanıtım ve diğer sayfalara yönlendirme |
| `etkinlikler.html` | 5 özgün etkinlik kartı (başlık, tarih, yer, açıklama) ve başlığa göre arama |
| `hakkimizda.html` | Kulübün tanıtımı ve sitenin amacı |
| `style.css` | Üç sayfanın ortak görünümü, mobil uyum ve odak (focus) stilleri |
| `script.js` | Arama, sayaç, sonuç bulunamadı mesajı ve Temizle düğmesi |

Üç sayfada da ortak navigation menüsü bulunur ve bağlantılar birbirine çalışır.

## Etkinlikler

1. Kamera Temelleri Atölyesi (12 Kasım, 14.00, Sanat Atölyesi)
2. Portre Fotoğrafçılığı Saati (19 Kasım, 14.00, Kütüphane Bahçesi)
3. Sonbahar Kampüs Fotoğraf Yürüyüşü (26 Kasım, 14.00, Kampüs Bahçesi)
4. Fotoğraf Düzenleme Atölyesi (3 Aralık, 14.00, Bilgisayar Laboratuvarı)
5. Kulüp Fotoğraf Sergisi (10 Aralık, 14.00, Fakülte Fuaye Alanı)

## Arama özelliği

- Kullanıcı yazdıkça eşleşen etkinlik kartları gösterilir.
- Büyük/küçük harf farkı ve baştaki/sondaki boşluklar sonucu etkilemez (Türkçe karakterler için `toLocaleLowerCase("tr-TR")`).
- Görünen etkinlik sayısı yazılır: "X etkinlik gösteriliyor."
- Eşleşme yoksa "Aramanıza uygun etkinlik bulunamadı." mesajı görünür.
- **Temizle** düğmesi aramayı sıfırlar, tüm etkinlikleri geri getirir ve odağı arama alanına verir.
- Arama alanının label öğesi vardır; site dar ekranda (390 px) yatay taşma olmadan kullanılır.

## Çalıştırma adımları

1. Repository'yi GitHub Codespaces'te aç (Code → Codespaces → Create codespace on main).
2. Terminalde proje klasöründe şu komutu çalıştır:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

3. Ports panelinde 8000 portunu bul ve **Open in Browser** ile aç.
4. Ana Sayfa, Etkinlikler ve Hakkımızda bağlantılarını dene.
5. Dosyalarda değişiklik yaptıktan sonra kaydet (Ctrl+S) ve tarayıcıyı yenile.

Yerel bilgisayarda `index.html` dosyasına çift tıklayarak da açılabilir. Kurulum, npm veya framework gerekmez.

## Belgeler ve kanıtlar

- [AI_NOTLARI.md](AI_NOTLARI.md): Kullanılan prompt'lar, AI önerisinin değerlendirilmesi ve kod açıklamaları
- [TEST_NOTLARI.md](TEST_NOTLARI.md): Altı testin beklenen ve gerçekleşen sonuçları
- Ekran görüntüleri (`ekran-goruntuleri/` klasörü):
  - `01-normal-arama.png`: Normal arama
  - `02-bos-sonuc.png`: Sonuç bulunamadı durumu
  - `03-mobil-390px.png`: 390 px mobil görünüm

## Dosya yapısı

```
index.html
etkinlikler.html
hakkimizda.html
style.css
script.js
README.md
AI_NOTLARI.md
TEST_NOTLARI.md
ekran-goruntuleri/
```

## Not

Bu proje eğitim amaçlıdır. Tarihler ve etkinlikler kurgudur. Kullanıcı girişi, form gönderimi ve database içermez.
