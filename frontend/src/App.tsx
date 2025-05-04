import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Snippets from "./pages/Snippets";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Test from "./components/Test";
import ProjectDetail from "./pages/ProjectDetails";
import SnippetDetails from "./pages/SnippetDetails";
import { ThemeProvider } from "./ThemeProvider";

const MainLayout = () => {
  const location = useLocation();
  const isSnippetsPage = location.pathname.includes("/snippets");
  return (
    <main
      className={`${
        isSnippetsPage ? "max-w-7xl" : "max-w-5xl"
      } mx-auto p-4 mt-20 min-h-screen`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact id="contact" />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/snippets" element={<Snippets />} />
        <Route path="/snippets/:slug" element={<SnippetDetails />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="bg-neutral-50 dark:bg-neutral-900 mx-auto max-w-8xl">
        <BrowserRouter>
          <Navbar />
          <MainLayout />
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
