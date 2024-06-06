import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
	it("Renders welcome heading which mentions 'TDD' inside of it.", () => {
		// ARRANGE - arrange the unitest
		render(<App />);
		const welcomeTitle = screen.getByRole("heading");
		// ACT - mock the user interaction

		// EXCPECT - match the result with the expected outcome
		expect(welcomeTitle).toHaveTextContent(/TDD/);
	});
});
