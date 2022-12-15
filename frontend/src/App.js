// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter, Switch, Routes,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";

// App Component
const App = () => {
return (
	<BrowserRouter>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to="/"
				className="nav-link">
				React MERN Stack App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to="/create-student"
					className="nav-link">
					Create Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Student List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>
		<main>
		<Container>
				<Routes>
				<Route path="/" exact element={<CreateStudent />} />
				<Route path="/create-student" exact element={<CreateStudent />} />
				<Route path="/edit-student/:id" exact element={<EditStudent />} />
				<Route path="/student-list" exact element={<StudentList />} />
				</Routes>
		</Container>
		</main>
	</div>
	</BrowserRouter>
);
};

export default App;
