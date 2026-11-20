import { test, expect } from "./fixtures";
import AxeBuilder from "@axe-core/playwright";

test("starter page is accessible", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();

  expect(results).toHaveNoAxeViolations();
});
