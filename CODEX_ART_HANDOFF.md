# CODEX_ART_HANDOFF — LT Studio nâng cấp thẩm mỹ (14/07/2026)

> **ART GATE đã chốt gu A** Retro-Futuristic “Cinematic Neon” và đã dựng. Eye-review production 2026-07-18: desktop không tràn ngang, font Việt ổn, số liệu giữ theo chỉ đạo chủ dự án. Asset thật vẫn chờ bàn giao.
> Đã nhúng `.claude/skills/{design-system,design-motion,design-artwork,design-craft}` vào repo — người thực thi đọc trước khi dựng.

## 1. Chẩn đoán hiện trạng (vì sao đọc "template")
- Nền `bg-black` + **vòng tròn nổi vàng/đỏ/hồng** (`floating-element`, opacity-20) — hiệu ứng slop kinh điển.
- **Nút gradient cầu vồng** `from-yellow-500 via-red-500 to-pink-500` lặp ở mọi CTA.
- Thẻ stat gradient xanh→tím, icon SVG chung chung.
- Nền hero là `banner.jpg` cứng + overlay đen; `/music-icon.png` (icon nốt nhạc — lệch định vị video).
→ Không có một anchor gu nào được giữ; mọi thứ về default gradient. Đây là thứ cần thay.

## 2. Điều PHẢI GIỮ (ràng buộc cứng — không phá khi làm đẹp)
- **Giữ YouTube playlist thật** ở home (`src/app/page.tsx`, 4 playlist). Eye-review phát hiện chủ video tắt playback ngoài YouTube, nên khung đã đổi thành link mở đúng playlist trên YouTube; không bỏ ID/link portfolio.
- Hệ song ngữ `useLanguage()`/`t(key)` — mọi chữ đến từ `LanguageContext.tsx`. Không hardcode chữ mới vào JSX.
- Cấu trúc trang: Home · About · News · FAQ · Contact + nút liên hệ nổi (FB/WhatsApp/tel) + số hotline `+84944.108.872`.
- **Không bịa dữ liệu** (luật frontend-design §2): không thêm testimonial giả, số liệu giả, tên khách giả. Slot không có nội dung thật thì để trống.
- Contrast AA; motion phải qua skill `review-animations` trước khi chốt.

## 3. BA PHƯƠNG ÁN GU (gate chọn 1)

### Phương án A — Retro-Futuristic "Cinematic Neon"  ⟨táo bạo nhất, đúng chất giải trí⟩
- **Vì sao:** studio video giải trí = năng lượng màn ảnh/điện ảnh. Anchor này "screen-native" nhất.
- **Token:** nền pitch-black `#0A0014`; cặp neon magenta `#FF006E` + cyan `#00FFFF`; type Space Mono/Orbitron cho display; texture **scanline CRT** (`::before` repeating-linear-gradient) + chromatic aberration nhẹ trên tiêu đề.
- **Differentiator (1 nước đi):** thumbnail video/khung playlist bọc trong "màn CRT" — viền scanline + glow; tiêu đề hero có tách màu RGB 2px.
- **Rủi ro:** dễ quá tay → phải kỷ luật, glow chỉ trên accent, giữ khoảng thở.

### Phương án B — Industrial "Production Deck"  ⟨kỷ luật, cao cấp-kỹ thuật⟩
- **Vì sao:** định vị "ê-kíp trọn gói, chạy thiết bị" → ngôn ngữ bàn dựng/console phát sóng.
- **Token:** warm-black `#0B0C0A`; **mono** (JetBrains/IBM Plex Mono) cho cả display lẫn body; **một** signal color — amber `#FFB800` hoặc acid lime `#C6FF4A`; viền 1px thay shadow; stat dùng `tabular-nums`.
- **Differentiator:** mọi số liệu (view, kênh, năm) hiển thị kiểu bảng-điều-khiển mono canh cột; nhãn dạng `// LABEL`.
- **Rủi ro:** lạnh — cần ảnh/thumbnail ấm để cân.

### Phương án C — Swiss "Editorial Reel"  ⟨an toàn-cao cấp, để tác phẩm nói⟩
- **Vì sao:** tương phản mạnh nhất với mớ gradient hiện tại; grid nghiêm để **video thumbnail thành nhân vật chính**.
- **Token:** nền trắng `#FFFFFF`/`#F7F7F8` (hoặc chia sáng/tối theo section); **một** accent Swiss Red `#E4002B`; type sans một họ (Helvetica Neue/Söhne); hairline 1px; **numeral làm phần tử bố cục** (số liệu set condensed lớn).
- **Differentiator:** lưới thumbnail bất đối xứng + số liệu khổng lồ canh trái như tạp chí điện ảnh.
- **Rủi ro:** "an toàn" — cần differentiator mạnh kẻo thành clean chung chung.

## 4. Sau khi gate chọn
1. Người thực thi đọc `.claude/skills/design-system` (token/contrast) + `design-motion` (hero-enter/card-reveal, qua `review-animations`) + `design-artwork` (thay `/music-icon.png` + ảnh placeholder bằng artwork đúng vibe).
2. Khoá token anchor vào `tailwind.config.js` + `globals.css`; thay toàn bộ nút gradient cầu vồng + vòng tròn floating.
3. Giữ nguyên nội dung `t()` + iframe playlist.
4. Cập nhật `TIEN-DO.md` cuối đợt.

## 5. Cần user cấp (asset thật, tránh bịa)
- Logo LT Studio vector/PNG nét (hiện chỉ có text + music-icon).
- Ảnh hero/showreel thật (thay `banner.jpg` "BON BON TV" — có phải brand hiện tại không?).
- Xác nhận các link YouTube playlist còn đúng là tác phẩm LT Studio.
