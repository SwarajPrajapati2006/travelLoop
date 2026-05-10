const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5175/trips/new');
  
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  page.on('console', msg => console.log('CONSOLE:', msg.text()));
  
  // type in description
  await page.type('textarea[name="description"]', 'test');
  await new Promise(r => setTimeout(r, 1000));
  
  await browser.close();
})();
