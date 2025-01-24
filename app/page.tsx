"use client"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import App from "./components/App";
import Create from "./components/Create";
import Edit from "./components/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
        </div>
  );
}
