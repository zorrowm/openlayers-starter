import { test, expect, stabilizeTileRequests } from './_helpers';

test('smoke: page loads and map container exists', async ({ page }) => {
  await stabilizeTileRequests(page);

  await page.goto('/');
  await expect(page.locator('#map')).toBeVisible();

  // OpenLayers usually creates at least one canvas element inside the map container.
  await expect(page.locator('#map canvas')).toHaveCount(1, { timeout: 15_000 });
});
