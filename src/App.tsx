import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { AuthProvider } from "@/components/providers/auth-provider.tsx";
import { ThemeProvider } from "@/components/providers/theme-provider.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <h1> Hi There</h1>

        <Routes>
          <Route path="/signin" element={<></>} />
          <Route path="/signup" element={<></>} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>

        <AuthProvider />
      </ThemeProvider>
    </>
  );
}

export default App;
