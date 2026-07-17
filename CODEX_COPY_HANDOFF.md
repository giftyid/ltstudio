# CODEX_COPY_HANDOFF — LT Studio tái định vị: nhạc → video truyền thông giải trí (14/07/2026)

> Site cũ định vị lẫn lộn *phân phối âm nhạc + video*. Yêu cầu chủ dự án: **bỏ hẳn mảng nhạc, chỉ còn video truyền thông giải trí**. Claude đã de-music-ify + soạn bản nháp claim-safe. Đây là cổng chốt định vị/tone/claim trước khi coi là bản chính thức. Không đổi visual trong gate này (visual = ART GATE, §E).

## A. ĐÃ LÀM (bản nháp, kỹ thuật)
Toàn bộ copy nằm trong `src/contexts/LanguageContext.tsx` (VI+EN) + vài chỗ hardcode. Đã sửa:
- `missionDesc1/2` — đoạn "phân phối âm nhạc... nghệ sĩ... Streaming" (chủ dự án chỉ đích danh) → sản xuất video giải trí/truyền thông.
- 4 trụ "Why choose" (`globalReach`/`fairCompensation`/`userFriendlyPlatform`/`supportiveCommunity` + `*Desc`) — vốn nói royalty/musicians/music career → tái khung thành: Đa nền tảng · Trọn gói một đầu mối · Ê-kíp chuyên nghiệp · Đồng hành dài lâu.
- `digitalStoresDescription`, `findPlanDescription` — bỏ Spotify/Apple Music/Deezer/iTunes/"giữ từng xu" → nói đa nền tảng video (YouTube/TikTok/Facebook).
- `getStartedDescription`, `joinArtists`, `releaseFirstSingleNow` ("PHÁT HÀNH SINGLE") — bỏ thuật ngữ phát hành nhạc → CTA dự án video.
- `src/app/faq/page.tsx` — 6 Q&A hardcode (distribute music/royalties/streaming) → 6 Q&A về dịch vụ video.
- `src/app/layout.tsx` — title "Video Distribution Platform"→"Sản xuất Video Giải trí & Truyền thông"; keyword bỏ "music distribution".

## B. ĐỊNH VỊ / TONE cần Codex CHỐT
Claude tránh tự quyết định vị (theo luật gate). Cần chốt:
1. **Câu định vị lõi (positioning line)** — hiện dùng "sản xuất video giải trí và truyền thông". Đây có phải định vị đúng, hay cụ thể hơn (agency quảng cáo? nhà sản xuất nội dung giải trí? production house)?
2. **Tagline / heroSubtitle** — hiện "Chuyên cung cấp, sản xuất các video giải trí và truyền thông". Giữ hay nâng.
3. **4 trụ "Why choose"** — Claude tự đặt tên 4 trụ (Đa nền tảng / Trọn gói / Ê-kíp / Đồng hành). Có đúng thế mạnh thật của LT Studio không? Đổi nếu sai.
4. **Xưng hô / tone** — hiện "bạn/chúng tôi", trung tính. Chốt lane.
5. **EN**: đã dịch song song. Rà lại giọng EN.

## C. ⚠ CLAIM CHƯA XÁC MINH — chủ dự án PHẢI xác nhận trước khi ship
Claude KHÔNG xoá cũng KHÔNG tự khẳng định các số này (nguyên tắc: không bịa, không khẳng định vô nguồn). Nhiều số là **di sản thời phân phối nhạc**, có thể sai với định vị video:
- "hơn **9 năm** kinh nghiệm" (mission + about) — đúng với mảng video?
- About stats: "**500+** YouTube Channels", "**200+** Employees", "**700M+** Views/Month", "**30+** Partner Countries" (`src/app/about/page.tsx`, hardcode).
- Home: "**200+** cửa hàng số / 200 quốc gia" (đã đổi câu chữ nhưng ý "đa nền tảng" vẫn ngầm quy mô lớn).
→ Chủ dự án cung cấp số thật hoặc bỏ. Không có nguồn thì gỡ, đừng để số treo.

## D. Residual (kỹ thuật, ngoài gate copy)
- `src/app/faq/page.tsx`: 6 Q&A vẫn **hardcode tiếng Anh**, không qua `t()` — hiện tiếng Anh cả khi site để VI. Nên chuyển vào LanguageContext để song ngữ (cải tiến riêng, chưa làm — surgical).
- `src/app/about/page.tsx`: nhãn stat "Views Per Month" / "Partner Countries" hardcode EN (có key `t('millionViews')`/`t('partnerCountries')` sẵn nhưng không dùng).
- `public/music-icon.png` + `src/app/page.tsx:138` — icon "nốt nhạc" ở home, lệch định vị video → thay ở ART GATE.

## E. Pha sau — NÂNG CẤP TOOLKIT (ART GATE, chưa làm)
Yêu cầu "nâng cấp repo bằng agency toolkit" phần **thẩm mỹ** là việc của ART GATE, không tself-freestyle:
- Nhúng `.claude/skills/{design-system,design-motion,design-artwork,design-craft}` vào repo (repo chưa có `.claude`).
- Chọn 1 gu (anchor frontend-design) → `CODEX_ART_HANDOFF.md` → dựng lại hero/thẻ/motion theo token, qua `review-animations`.
- Thay icon nốt-nhạc, ảnh placeholder gradient → artwork thật (video/production vibe).
- Thêm `TIEN-DO.md` (7 stage + 4 cổng).
