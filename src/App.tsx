import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* 🌌 GLOBAL BACKGROUND WRAPPER */}
      <div className="relative min-h-screen overflow-hidden bg-[#0B0F1A] text-white">

        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>

        {/* Center Spotlight */}
        <div className="absolute top-[-20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"></div>

        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* ROUTER CONTENT */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;