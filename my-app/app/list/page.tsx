"use client";

import SideBar from "./components/SideBar";
import LeadsTable from "./components/LeadsTable";
import AuthPage from "./components/AuthPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const sessionIsAuthenticated = sessionStorage.getItem("isAuthenticated");

    setIsAuthenticated(sessionIsAuthenticated === "true");
  }, []);
  if (!isAuthenticated) {
    return <AuthPage />;
  }

  return (
    <div className="flex">
      <SideBar />
      <main className="w-[100%]">
        <h1 className="font-bold text-3xl my-[24px]">Leads</h1>
        <LeadsTable />
      </main>
    </div>
  );
}
