// Headless screenshot helper.
// Usage: node tools/screenshot.mjs http://127.0.0.1:4444/ /tmp/home.png 1440 900
import { chromium } from 'playwright';

const [url, out, w = '1440', h = '900', wait = '1200'] = process.argv.slice(2);
if (!url || !out) {
  console.error('Usage: node tools/screenshot.mjs <url> <out> [width] [height] [waitMs]');
  process.exit(1);
}

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const ctx = await browser.newContext({
  viewport: { width: parseInt(w, 10), height: parseInt(h, 10) },
  deviceScaleFactor: 1.5,
  reducedMotion: 'reduce',
});
const page = await ctx.newPage();

await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(parseInt(wait, 10));
await page.screenshot({ path: out, fullPage: true });
console.log(`saved ${out}`);
await browser.close();
