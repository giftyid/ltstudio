# TIẾN ĐỘ — LT Studio (video truyền thông giải trí)

> Cập nhật: 2026-07-18 · Nhánh chính đang làm: `reposition/video-entertainment` · **Hoàn thiện: 10/13 ô ✅**
> Đợt đang chạy: COPY + ART + SEO gate đã chốt; logo mới tích hợp, banner cũ giữ nguyên; CHỜ push.

## Stage kỹ thuật
| Stage | Trạng thái | Ghi chú (commit/ngày/bằng chứng) |
|---|---|---|
| Provision (repo, remote) | ✅ 2026-07-14 | github.com/giftyid/ltstudio, Next 15.3 / React 19 / Tailwind v3 |
| Config (token/vibe) | ✅ 2026-07-18 | anchor Retro-Futuristic khoá token globals.css + tailwind (`fa1b9d6`) |
| Content (copy) | ✅ 2026-07-18 | chốt “studio sản xuất video giải trí & truyền thông”; FAQ VI+EN; chủ dự án yêu cầu giữ toàn bộ claim số |
| Verify (build) | ✅ 2026-07-14 | `npm run build` xanh, 9/9 static (`ebb524d`) |
| Deploy | 🔶 CHỜ user | chưa push nhánh; deploy Vercel do user |
| GEO-audit | — | repo ngoài chuẩn chassis, chưa gắn geo-audit |
| Live | ⬜ chưa tới | — |

## Cổng duyệt (người/Codex quyết — 🔶 = đang tắc ở người)
| Cổng | Trạng thái | Handoff / điều kiện vào cổng |
|---|---|---|
| COPY | ✅ 2026-07-18 | chốt định vị/tone; chủ dự án xác nhận giữ toàn bộ số; xem `CODEX_COPY_HANDOFF.md` |
| ART | ✅ 2026-07-18 | gu A Retro-Futuristic dựng (`fa1b9d6`) + eye-review production desktop/mobile; asset thật vẫn chờ |
| SEO | ✅ 2026-07-18 | metadata chốt theo định vị studio video; sạch dấu vết music |
| GEO | — | chưa áp dụng |

## Nhật ký đợt (mới nhất trên cùng)
- 2026-07-18 — Codex gate: chốt positioning/tone, giữ toàn bộ claim số theo chỉ đạo chủ dự án; FAQ VI+EN; metadata mới; build production xanh
- 2026-07-18 — asset gate: tạo logo LT Studio monogram film/play nền trong suốt; giữ banner Bon Bon TV; nối nút portfolio tới `@bonbonmedia9360`
- 2026-07-18 — eye-review thật: desktop không tràn ngang, font Việt ổn; YouTube chặn embed nên giữ đúng 4 playlist dưới dạng link mở YouTube
- 2026-07-18 — ART GATE chọn gu A → dựng lại toàn site theo Retro-Futuristic "Cinematic Neon" (`fa1b9d6`), build xanh
- 2026-07-14 — nhúng `.claude/skills/{design-system,motion,artwork,craft}` + soạn CODEX_ART_HANDOFF (3 gu) + TIEN-DO — chờ chọn gu
- 2026-07-14 — tái định vị nhạc→video (LanguageContext VI+EN, 6 FAQ, metadata) + CODEX_COPY_HANDOFF — build xanh (`ebb524d`)

## Ghi chú
- Toàn bộ copy trong `src/contexts/LanguageContext.tsx` (`t(key)`); portfolio thật = 3 YouTube playlist ở home (giữ khi làm đẹp).
- Claim số: chủ dự án yêu cầu giữ nguyên cả các bộ số hiện có; không tự đồng bộ khi chưa có số chuẩn duy nhất.
