import "@nettee-sample/ui/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className="mb-8 bg-black p-4">
          <h1 className="text-3xl font-bold text-white">Sample_Code</h1>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
