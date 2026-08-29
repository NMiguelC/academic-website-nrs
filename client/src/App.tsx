import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import CookieConsentBanner from "./components/CookieConsentBanner";
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Teaching from "./pages/Teaching";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Book from "./pages/Book";
import Media from "./pages/Media";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/cv"} component={CV} />
          <Route path={"/publications"} component={Publications} />
          <Route path={"/teaching"} component={Teaching} />
          <Route path={"/services"} component={Services} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/blog"} component={Blog} />
          <Route path={"/book"} component={Book} />
          <Route path={"/media"} component={Media} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <LanguageProvider>
          <CookieConsentProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
              <CookieConsentBanner />
            </TooltipProvider>
          </CookieConsentProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
