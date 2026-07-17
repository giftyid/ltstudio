# TIẾN ĐỘ — LT Studio (video truyền thông giải trí)

> Cập nhật: 2026-07-14 · Nhánh chính đang làm: `reposition/video-entertainment` · **Hoàn thiện: 5/13 ô ✅**
> Đợt đang chạy: tái định vị nhạc→video XONG (chờ push/duyệt); nâng cấp thẩm mỹ toolkit đang CHỜ ART GATE chọn gu.

## Stage kỹ thuật
| Stage | Trạng thái | Ghi chú (commit/ngày/bằng chứng) |
|---|---|---|
| Provision (repo, remote) | ✅ 2026-07-14 | github.com/giftyid/ltstudio, Next 15.3 / React 19 / Tailwind v3 |
| Config (token/vibe) | ⬜ chưa tới | chờ ART GATE chọn anchor → khoá token tailwind/globals |
| Content (copy) | ✅ 2026-07-14 | tái định vị nhạc→video, VI+EN, claim-safe (`ebb524d`); claim số chờ chủ dự án |
| Verify (build) | ✅ 2026-07-14 | `npm run build` xanh, 9/9 static (`ebb524d`) |
| Deploy | 🔶 CHỜ user | chưa push nhánh; deploy Vercel do user |
| GEO-audit | — | repo ngoài chuẩn chassis, chưa gắn geo-audit |
| Live | ⬜ chưa tới | — |

## Cổng duyệt (người/Codex quyết — 🔶 = đang tắc ở người)
| Cổng | Trạng thái | Handoff / điều kiện vào cổng |
|---|---|---|
| COPY | 🔶 CHỜ Codex/chủ dự án | `CODEX_COPY_HANDOFF.md` — chốt định vị/tone (§B) + xác minh claim số (§C) |
| ART | 🔶 CHỜ Codex/user | `CODEX_ART_HANDOFF.md` — chọn 1/3 gu (A Retro-Futuristic · B Industrial · C Swiss) |
| SEO | ⬜ chưa tới | metadata đã bỏ music; đợi định vị chốt |
| GEO | — | chưa áp dụng |

## Nhật ký đợt (mới nhất trên cùng)
- 2026-07-14 — nhúng `.claude/skills/{design-system,motion,artwork,craft}` + soạn CODEX_ART_HANDOFF (3 gu) + TIEN-DO — chờ chọn gu
- 2026-07-14 — tái định vị nhạc→video (LanguageContext VI+EN, 6 FAQ, metadata) + CODEX_COPY_HANDOFF — build xanh (`ebb524d`)

## Ghi chú
- Toàn bộ copy trong `src/contexts/LanguageContext.tsx` (`t(key)`); portfolio thật = 3 YouTube playlist ở home (giữ khi làm đẹp).
- Claim chưa xác minh (9 năm, 500+ kênh, 700M view, 30+ QG): chủ dự án confirm/bỏ — không tự khẳng định.
