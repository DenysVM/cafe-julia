// src/theme/index.ts
import { createSystem, defaultConfig, defineTokens } from "@chakra-ui/react";

const tokens = defineTokens({
  colors: {
    sand: {
      50: { value: "#fdf9f4" },
      100: { value: "#f5e9d8" },
      200: { value: "#ebd0af" },
      300: { value: "#e1b787" },
      400: { value: "#d79e5f" },
      500: { value: "#bd8446" }, 
      600: { value: "#966637" },
      700: { value: "#6f4927" },
      800: { value: "#482c18" },
      900: { value: "#211008" },
    },
    terracotta: {
      50: { value: "#fff5f2" },
      100: { value: "#ffd9cc" },
      200: { value: "#f4a48d" },
      300: { value: "#e6775a" },
      400: { value: "#d94a27" },
      500: { value: "#bf3010" }, 
      600: { value: "#97260c" },
      700: { value: "#6f1c09" },
      800: { value: "#471305" },
      900: { value: "#1f0902" },
    },
    coffee: {
      50: { value: "#f7f5f2" },
      100: { value: "#e0d8ce" },
      200: { value: "#c2b29e" },
      300: { value: "#a48c6e" },
      400: { value: "#86663e" },
      500: { value: "#6c4d25" }, 
      600: { value: "#543c1d" },
      700: { value: "#3c2b15" },
      800: { value: "#241a0c" },
      900: { value: "#0d0903" },
    },
  },
  fonts: {
    heading: { value: "'Playfair Display', serif" },
    body: { value: "'Open Sans', sans-serif" },
  },
});

const system = createSystem(defaultConfig, {
  theme: { tokens },
});

export default system;
