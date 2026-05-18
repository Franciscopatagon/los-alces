/**
 * Genera Alces-FC-Propuesta.pdf a partir de la ruta /propuesta.
 * Uso:
 *   1) npm run build && npm run start   (en otra terminal)
 *   2) npm run pdf
 */
const puppeteer = require("puppeteer");

const URL = process.env.PDF_URL || "http://localhost:3000/propuesta";
const OUT = process.env.PDF_OUT || "Alces-FC-Propuesta.pdf";

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });
  await page.emulateMediaType("print");
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2000)); // fuentes

  await page.pdf({
    path: OUT,
    width: "1280px",
    height: "720px",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`✓ PDF generado: ${OUT}`);
})();
