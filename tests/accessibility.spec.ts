import {test, expect} from '@playwright/test';
import AxeBuilder from "@axe-core/playwright";

test.describe('homepage accessibility', () => {
    test('the page should not have accessibility issues', async ({page, baseURL}) => {
        await page.goto(`${baseURL}`)
        const accessibilityScanResults = await new AxeBuilder({page}).analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    })
})