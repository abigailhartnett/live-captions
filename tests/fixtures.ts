import { test, expect as baseExpect } from "@playwright/test";
import type AxeBuilder from "@axe-core/playwright";

type AxeResults = Awaited<ReturnType<AxeBuilder["analyze"]>>;

export { test };

export const expect = baseExpect.extend({
  toHaveNoAxeViolations(results: AxeResults) {
    const { violations } = results;
    const pass = violations.length === 0;

    const message = () => {
      if (pass) return "Expected accessibility violations";

      const details = violations.flatMap((violation) =>
        violation.nodes.map((node) => {
          const checks = [...node.any, ...node.all, ...node.none];
          const problems = checks
            .map((check) => check.message)
            .filter(Boolean)
            .join("\n");

          return [
            `FAIL: ${violation.help} (${violation.impact})`,
            `Impact: ${violation.impact}`,
            `Element: ${node.target.join(", ")}`,
            `HTML: ${node.html}`,
            `Problem: ${problems}`,
            `Learn more: ${violation.helpUrl}`,
          ].join("\n");
        }),
      );

      return [
        `${violations.length} accessibility rule(s) violated:`,
        ...details,
      ].join("\n\n");
    };

    return { pass, message };
  },
});
