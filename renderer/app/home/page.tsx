"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function HomePage() {
  React.useEffect(() => {
    window.ipc.getUsers().then(console.log);
  }, []);

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="w-full">
          <p className="font-bold text-center w-full p-4">
            ⚡ Electron + Next.js ⚡
          </p>
          <Image
            src="/images/logo.png"
            alt="Logo image"
            className="mx-auto"
            width={256}
            height={256}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Button
            className=""
            onClick={() => window.ipc.getUsers().then(console.log)}
          >
            get users
          </Button>
          <Button
            onClick={() =>
              window.ipc.addUser({
                name: "test",
                age: 18,
                email: "example@test.pl",
              })
            }
          >
            Add user
          </Button>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
