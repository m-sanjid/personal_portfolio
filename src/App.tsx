import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Snippets from "./pages/Snippets";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Test from "./components/Test";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<main className="container max-w-5xl mx-auto p-4 mt-20 min-h-screen">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/projects" element={<Project />} />
						<Route path="/snippets" element={<Snippets />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/test" element={<Test />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
