import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router}/>
        <Toaster></Toaster>
      </ThemeProvider>
    
  </React.StrictMode>,
)


