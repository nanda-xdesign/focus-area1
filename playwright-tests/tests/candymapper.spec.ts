import { test, expect } from '@playwright/test';

test('Launch Candymapper',async ({ page }) => {
    await page.goto('https://candymapper.com/');

    await page.locator('#popup-widget307423-close-icon > path').click();

    await page.getByRole('button', { name: 'More' }).click();

    await page.getByRole('link', { name: 'Launch CandyMapper' }).click();
    const heading = page.getByRole('heading', { name: 'This spooky slow service takes forever to load...' })

    await expect(heading).toHaveText('This spooky slow service takes forever to load...');

})