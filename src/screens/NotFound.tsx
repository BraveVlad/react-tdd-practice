import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div>
			<h1>Oopsie Doopsie!</h1>
			<Link to={"/"}>Take me home!</Link>
		</div>
	);
}

export default NotFound;
