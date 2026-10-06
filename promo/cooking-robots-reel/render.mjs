// Renders reel.html to an Instagram Reels MP4 (1080×1920, 30 fps).
// Usage: node render.mjs [outDir]   (requires playwright + ffmpeg on PATH)
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const FPS = 30, DURATION = 27, W = 1080, H = 1920;
const outDir = path.resolve(process.argv[2] ?? here);
const framesDir = path.join(outDir, '_frames');
fs.mkdirSync(framesDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(here, 'reel.html'));
await page.evaluate(() => document.fonts.ready);

const total = FPS * DURATION;
const t0 = Date.now();
for (let i = 0; i < total; i++) {
  await page.evaluate(t => window.render(t), i / FPS);
  const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: W, height: H } });
  fs.writeFileSync(path.join(framesDir, `f${String(i).padStart(4, '0')}.png`), buf);
  if (i % 90 === 0) console.log(`frame ${i}/${total}  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
}
// cover frame for the Reels thumbnail (end card)
fs.copyFileSync(path.join(framesDir, `f${String(FPS * 26).padStart(4, '0')}.png`), path.join(outDir, 'cover.png'));
await browser.close();

const mp4 = path.join(outDir, 'cooking-robots-reel.mp4');
const ff = spawnSync('ffmpeg', [
  '-y', '-framerate', String(FPS), '-i', path.join(framesDir, 'f%04d.png'),
  '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo',
  '-shortest', '-r', String(FPS),
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.1',
  '-c:a', 'aac', '-b:a', '128k',
  '-movflags', '+faststart', mp4,
], { stdio: 'inherit' });
if (ff.status !== 0) process.exit(ff.status ?? 1);
fs.rmSync(framesDir, { recursive: true, force: true });
console.log('wrote', mp4);
