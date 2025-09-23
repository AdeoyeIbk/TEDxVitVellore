import Index from "./pages/Index";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";


export default function App() {
  return (
    <div className="bg-tedx-black text-tedx-white min-h-screen">
      <MainLayout>
        <Index />
      </MainLayout>
    </div>
  );
}
