import localFont from "next/font/local";

export const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
