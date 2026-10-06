# Cooking Robots — Instagram Reel storyboard

**Format:** 1080 × 1920 (9:16), 30 fps, 27 s, H.264 MP4 with silent AAC track (add trending audio in the Instagram app).
**Source:** `reel.html` (deterministic timeline, `render(t)`), rendered by `render.mjs` → `cooking-robots-reel.mp4`, cover frame `cover.png`.
**Brand system:** Cooking Robots design system — Manrope, Primary Blue `#1156C5`, Deep Navy `#0F172A`, Crimson `#BE123C`, Off-White `#FBFBFB`, 60 px pill controls, 14 px cards with flat offset shadow.
**Safe zones:** all copy sits between y = 250 and y = 1500 so the Reels UI (top bar, caption, buttons) never covers it.

| # | Time (s) | Scene | Background | On-screen copy | Motion |
|---|---|---|---|---|---|
| 1 | 0.0 – 3.6 | Hook | Navy + blue glow | *Still prepping everything by hand?* / Commercial kitchen automation · Installed & supported in the U.S. | Lines rise in with stagger, blue underline draws under "by hand?" |
| 2 | 3.0 – 8.4 | The lineup | Off-white | *Meet the robots.* — 01 Roboroller Deluxe (Kimbap rolling · 250+ rolls / hr) · 02 Slice Pro (Uniform slices at high volume) · 03 Hauscook Ramen Cooker (Ramen, cooked automatically) · ETL certified · Installed and trained by our U.S. team | Scene slides up; product cards snap in from the right |
| 3 | 7.8 – 12.4 | Why operators switch | Primary Blue | *More output. Same quality. No new hires.* / Increase efficiency and keep consistent quality — without hiring more staff. | Word-by-word reveal, white underline |
| 4 | 11.8 – 17.0 | Built for real kitchens | Off-white | *Trusted by 300+ restaurants.* — ETL Certified · U.S.-Based Support · Fast & Professional Installation · 36 Months Financing Available · 4.9 / 5 on Trustpilot ★★★★★ · Quote: "After installing the cooking robot, our production increased noticeably without compromising quality." — Sushi restaurant owner, New Jersey | Trust chips pop in; testimonial card rises |
| 5 | 16.4 – 20.2 | Featured story | Navy | *2026 US Open* — High-volume kimbap prep, in live service. Roboroller Deluxe · Slice Pro | Headline rise, rule draws, product pills |
| 6 | 19.6 – 23.4 | Special bundle offer | Off-white | Badge *Save $1,000* — *Roboroller Deluxe + Slice Pro* — Consistent prep for high-volume kitchens, bundled with free installation support. Pills: 36 Months Financing Available · Free installation support · U.S.-based team | Crimson badge spins in |
| 7 | 22.8 – 27.0 | CTA | Navy + glow | *Smarter Kitchens. Better Operations.* — **Book a Free Demo** — cooking-robots.com · Link in bio | Pill button pops and pulses; end card held for the cover |

## Where each line comes from

- Products, output figure, ETL certification, trust badges, button labels, tagline and testimonial: *Cooking Robots Design System* and *Cooking Robots 포트폴리오 시안* (live-site extraction).
- "Trusted by 300+ Restaurants", "Flexible Financing Options", "U.S.-Based Support Team", "Fast & Professional Installation", "Save $1,000" bundle copy: design-system badge and card samples.
- 36-month financing and the "without hiring more staff" value line: *Cooking Robots 포트폴리오 콘텐츠* (Task 02 / Task 01).
- 2026 US Open featured story, Trustpilot 4.9 / 5: portfolio content, section 09.

No prices other than the published "Save $1,000" bundle badge are shown, because financing terms vary by business and the site itself avoids fixed monthly figures.

## Re-rendering

```bash
cd promo/cooking-robots-reel
node render.mjs            # needs playwright (Chromium) and ffmpeg
```

Open `reel.html` in a browser to preview the animation in a loop. Edit copy directly in the HTML; timings live in the `storyboard` block at the bottom of the file.

## Variants worth making next

- A Korean-language cut (swap copy, set `IBM Plex Sans KR` or `Pretendard` for the headline lines).
- A 15 s cut-down: scenes 1, 2, 6, 7.
- Real footage: scenes 2 and 5 are designed so a product or US Open clip can replace the background while the text stays.
