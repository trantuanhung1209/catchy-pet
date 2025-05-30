import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

// Sử dụng lazy loading cho các trang
const HomePage = lazy(() => import("./pages/home/Home"));
const AboutPage = lazy(() => import("./pages/about/About"));
const ProductsPage = lazy(() => import("./pages/products/Products"));
const ContactPage = lazy(() => import("./pages/contact/Contact"));
const BookPage = lazy(() => import("./pages/book/Book"));
const NewPage = lazy(() => import("./pages/new/New"));

function App() {
  const location = useLocation();
  const [isChangingRoute, setIsChangingRoute] = useState(false);

  // Reset loading state on route change
  useEffect(() => {
    setIsChangingRoute(true);
    const timer = setTimeout(() => {
      setIsChangingRoute(false);
    }, 300); // Add a small delay to ensure loading is visible

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main className="inner-main min-h-[calc(100vh-150px)] mt-[-162px]">
        <Suspense fallback={<Loading />}>
          {isChangingRoute ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/news" element={<NewPage />} />
            </Routes>
          )}
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;

// Component Loading (hiệu ứng spinner)
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fcf8ee] bg-opacity-80 z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
        <p className="mt-4 text-[#b57310] font-medium">Đang tải...</p>
      </div>
    </div>
  );
};
