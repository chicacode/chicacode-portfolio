import Image from "next/image";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <Header />
      </div>
    </main>
  );
}