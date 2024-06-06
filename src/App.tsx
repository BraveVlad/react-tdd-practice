import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

function AppContainer() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
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
export default AppContainer;
