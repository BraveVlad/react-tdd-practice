import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	it("Renders welcome heading which mentions 'TDD' inside of it.", () => {
		// ARRANGE - arrange the unitest
		render(<App />);
		const welcomeTitle = screen.getByTestId("main-welcome-title");
		// ACT - mock the user interaction

		// EXCPECT - match the result with the expected outcome
		expect(welcomeTitle.textContent).toContain("TDD");
	});
});
