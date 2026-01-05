import "./globals.css";

export const metadata = {
  title: "Adrien Motaharian | Math + CS",
  description: "Personal portfolio – Math & Computer Science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}