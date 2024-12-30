import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotesApp from "./components/NotesApp";
import NotesApp2 from "./components/NotesApp2";

// import DataTable from "./components/DataTable_user"; // Ensure case matches exactly
// import Login from "./components/Login"; // Import the Login component
// import ProtectedRoute from "./components/ProtectedRoute";
// import Navbar from "./components/Navbar";

function App() {
	//	const location = useLocation(); // Get the current location

	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>
				<Route
					path="/"
					element={
							<NotesApp />
					}
				/>
						<Route
					path="/notes"
					element={
							<NotesApp2 />
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
