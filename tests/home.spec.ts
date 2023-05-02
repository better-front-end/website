import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("should not have any automatically detectable accessibility issues", async ({
		page,
	}) => {
		const axeBuilder = new AxeBuilder({ page });
		const axeResults = await axeBuilder.analyze();

		expect(axeResults.violations).toStrictEqual([]);
	});
});
