import DashboardHeader from "./header";
import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      {/* Kontainer untuk header + main content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
