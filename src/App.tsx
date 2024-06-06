import { useState } from "react";
import "./App.css";

function App() {
	return (
		<>
			<h1 data-testid="main-welcome-title">Welcome to React TDD practice!</h1>
			<SimpleCounter />
		</>
	);
}

function SimpleCounter() {
	const [count, setCount] = useState(0);

	function handleCounterClick(): void {
		setCount(count + 1);
	}

	return (
		<>
			<div>Counter: {count}</div>
			<button onClick={handleCounterClick}>add +1</button>
		</>
	);
}
export default App;
