import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          {/* SIDEBAR */}

          {/* CLIENTPROVIDER NOTIFICATION */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
