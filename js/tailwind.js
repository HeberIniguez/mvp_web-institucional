tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0D47A1",
        "primary-dark": "#0B4B89",
        secondary: "#1E88E5",
        accent: "#FFC107",
        "background-light": "#F5F7FA",
        "background-dark": "#1A202C",
        "text-light": "#1A202C",
        "text-dark": "#EDF2F7",
        "itt-red": "#9B2335",
        "itt-dark-red": "#7A1C2A",
        "itt-blue": "#003366",
        "itt-blue-light": "#1E88E5",
        "itt-gold": "#CBB67E",
        "itt-gray": {
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
        "itt-light-gray": "#F5F7FA",
        accent: "#FFA500", // Orange for accents
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        display_services: ["Manrope", "sans-serif"],
        sans: ["Noto Sans", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
