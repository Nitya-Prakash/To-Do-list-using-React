import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-bold">{children}</body>
    </html>
  );
}
