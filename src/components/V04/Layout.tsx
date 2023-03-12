import Footer from "./generals/Footer";
import Navbar from "./generals/Navbar";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-gray-200">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
