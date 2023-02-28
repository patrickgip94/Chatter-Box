import SideBar from "../components/SideBar";
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
        <div className="flex">
          {/* SIDEBAR */}
          <div className="bg-[#3c3e42] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <SideBar />
          </div>

          {/* CLIENTPROVIDER - NOTIFICATION */}

          <div className="bg-[#CEB195] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
