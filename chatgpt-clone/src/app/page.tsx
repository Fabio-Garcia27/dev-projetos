"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSidebar = () => {
    setSidebarOpened(false);
  }

  return (
    <main className="flex min-h-screen bg-gray-800">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
      >
      </Sidebar>
      <section className="flex flex-col w-full">
        <button onClick={() => setSidebarOpened(true)}>Abrir Sidebar</button>
      </section>
    </main>
  )
}

export default Page