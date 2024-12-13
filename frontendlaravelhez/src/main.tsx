import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient() 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute={"class"}>
        <Theme>
          <App />
        </Theme>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
