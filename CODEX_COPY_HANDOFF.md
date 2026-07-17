# CODEX_COPY_HANDOFF — LT Studio tái định vị: nhạc → video truyền thông giải trí (14/07/2026)

> **COPY GATE đã chốt 2026-07-18.** Định vị: **studio sản xuất video giải trí và truyền thông**. Tone: **bạn/chúng tôi**, trung tính, rõ quy trình. Chủ dự án yêu cầu giữ toàn bộ số liệu đang có trên Home/About.

## A. ĐÃ LÀM (bản nháp, kỹ thuật)
Toàn bộ copy nằm trong `src/contexts/LanguageContext.tsx` (VI+EN) + vài chỗ hardcode. Đã sửa:
- `missionDesc1/2` — đoạn "phân phối âm nhạc... nghệ sĩ... Streaming" (chủ dự án chỉ đích danh) → sản xuất video giải trí/truyền thông.
- 4 trụ "Why choose" (`globalReach`/`fairCompensation`/`userFriendlyPlatform`/`supportiveCommunity` + `*Desc`) — vốn nói royalty/musicians/music career → tái khung thành: Đa nền tảng · Trọn gói một đầu mối · Ê-kíp chuyên nghiệp · Đồng hành dài lâu.
- `digitalStoresDescription`, `findPlanDescription` — bỏ Spotify/Apple Music/Deezer/iTunes/"giữ từng xu" → nói đa nền tảng video (YouTube/TikTok/Facebook).
- `getStartedDescription`, `joinArtists`, `releaseFirstSingleNow` ("PHÁT HÀNH SINGLE") — bỏ thuật ngữ phát hành nhạc → CTA dự án video.
- `src/app/faq/page.tsx` — 6 Q&A hardcode (distribute music/royalties/streaming) → 6 Q&A về dịch vụ video.
- `src/app/layout.tsx` — title "Video Distribution Platform"→"Sản xuất Video Giải trí & Truyền thông"; keyword bỏ "music distribution".

## B. ĐỊNH VỊ / TONE — ✅ ĐÃ CHỐT
1. **Câu định vị lõi:** “Studio sản xuất video giải trí và truyền thông”.
2. **Tagline hero:** dùng đúng câu định vị lõi, không gọi LT Studio là agency hay nền tảng phân phối.
3. **4 trụ:** Đa nền tảng · Trọn gói một đầu mối · Ê-kíp chuyên nghiệp · Đồng hành dài lâu.
4. **Xưng hô / tone:** “bạn/chúng tôi”, trung tính, trực tiếp.
5. **VI+EN:** đã đồng bộ; FAQ đã chuyển vào `LanguageContext`.

## C. CLAIM SỐ — ✅ CHỦ DỰ ÁN YÊU CẦU GIỮ (2026-07-18)
Giữ nguyên toàn bộ số liệu hiện có:
- Copy: **hơn 9 năm** kinh nghiệm.
- About: **500+** YouTube Channels · **200+** Employees · **700M+** Views/Month · **30+** Partner Countries.
- Home proof cards: **100+** dự án · **50+** khách hàng · **5+** năm · hỗ trợ **24/7**.
- Home stats: **157** kênh · **63** nhân viên · **219** triệu view/tháng · **9** quốc gia đối tác.
- EN giữ tiêu đề **200+ Different Digital Stores**.

> Lưu ý biên tập: các bộ số không đồng nhất (ví dụ “hơn 9 năm” và “5+ năm”) nhưng được giữ theo chỉ đạo trực tiếp của chủ dự án; không tự hợp nhất số.

## D. Residual (kỹ thuật, ngoài gate copy)
- `src/app/faq/page.tsx`: ✅ 6 Q&A đã chuyển vào `LanguageContext`, song ngữ VI+EN.
- `src/app/about/page.tsx`: ✅ nhãn stat dùng `t('millionViews')`/`t('partnerCountries')`.
- `public/music-icon.png` + `src/app/page.tsx:138` — icon "nốt nhạc" ở home, lệch định vị video → thay ở ART GATE.

## E. Pha sau — NÂNG CẤP TOOLKIT (ART GATE, chưa làm)
Yêu cầu "nâng cấp repo bằng agency toolkit" phần **thẩm mỹ** là việc của ART GATE, không tself-freestyle:
- Nhúng `.claude/skills/{design-system,design-motion,design-artwork,design-craft}` vào repo (repo chưa có `.claude`).
- Chọn 1 gu (anchor frontend-design) → `CODEX_ART_HANDOFF.md` → dựng lại hero/thẻ/motion theo token, qua `review-animations`.
- Thay icon nốt-nhạc, ảnh placeholder gradient → artwork thật (video/production vibe).
- Thêm `TIEN-DO.md` (7 stage + 4 cổng).
