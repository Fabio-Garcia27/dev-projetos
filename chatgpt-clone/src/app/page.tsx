"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header";
import { ChatArea } from "@/components/ChatArea";
import { Chat } from "@/types/Chat";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>();

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () => {

  }

    const handleNewChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-gray-800">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        {/* <button onClick={() => setSidebarOpened(true)}>Abrir Sidebar</button> */}
        <Header
          openSidebarClick={openSidebar}
          title={`Bla bla bla`}
          newChatClick={handleNewChat}
        />
        <ChatArea chat={chatActive} />
      </section>
    </main>
  )
}

export default Page