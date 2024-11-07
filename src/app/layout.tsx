import "./globals.css";
import Navigation from "./ui/navigation/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
