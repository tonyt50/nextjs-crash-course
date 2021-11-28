const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "hhtp://localhost:3000"
  : "https://ypurprodwebsite.com";
