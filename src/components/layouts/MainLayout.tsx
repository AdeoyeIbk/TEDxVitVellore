import Footer from "../Footer";
import Header from "../Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bgd-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
