import { test, expect } from '@playwright/test'

test('插槽的使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#slot')

  // TODO
})
