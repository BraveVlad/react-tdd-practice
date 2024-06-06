import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { AppContainer, App } from "./App";

describe("App", () => {
	const badRoute = "/bad/route/";

	it("Renders welcome heading which mentions 'TDD' inside of it.", () => {
		// ARRANGE - arrange the unitest
		render(<AppContainer />);
		const welcomeTitle = screen.getByRole("heading", {
			level: 1, // level means h1 (h1-6)}
		});
		// ACT - mock the user interaction

		// EXCPECT - match the result with the expected outcome
		expect(welcomeTitle).toHaveTextContent(/TDD/);
	});

	it("Renders NotFound if invalid path with a message", () => {
		// ARRANGE
		render(
			<MemoryRouter initialEntries={[badRoute]}>
				<App />
			</MemoryRouter>
		);
		// ACT
		// EXPECT
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
			"Oopsie Doopsie!"
		);
	});

	it("Renders NotFound if invalid path with a link to index", () => {
		// ARRANGE

		render(
			<MemoryRouter initialEntries={[badRoute]}>
				<App />
			</MemoryRouter>
		);
		// ACT
		// EXPECT
		expect(screen.getByRole("link", { name: "Take me home!" })).toHaveAttribute(
			"href",
			"/"
		);
	});
});
