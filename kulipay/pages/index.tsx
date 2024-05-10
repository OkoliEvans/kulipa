import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <> 
    {/* <Header /> */}
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
      <Hero />
      Hello World
      <>
      <ConnectKitButton />
      </>
    </main>
      </>
  );
}
