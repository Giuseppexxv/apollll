@import "tailwindcss";

@theme {
  --color-cinema-red: #E50914;
  --color-cinema-gold: #D4AF37;
  --color-cinema-dark: #080808;
  --color-cinema-card: #121212;
  
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

body {
  @apply bg-cinema-dark text-white font-sans antialiased overflow-x-hidden;
  -webkit-tap-highlight-color: transparent;
}

html {
  scroll-behavior: smooth;
}

.glass-effect {
  @apply bg-black/90 backdrop-blur-3xl border-b border-white/10 shadow-2xl shadow-black/90;
}

.text-shadow-cinema {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.glass-card {
  @apply bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl;
}
