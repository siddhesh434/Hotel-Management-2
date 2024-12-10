"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-[60vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="data:image/jpeg;base64,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"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
