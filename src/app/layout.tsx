"use client";
import { Fragment, useState } from "react";
import classnames from "classnames";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";

import { Inter } from "next/font/google";
import {
  ProfileDropdown,
  SidebarNavigation,
  Footer,
  MainSearch,
} from "@/components/organisms";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <SidebarNavigation onClose={setSidebarOpen} isOpen={sidebarOpen} />

          <div className="lg:pl-72">
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar ope</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div
                className="h-6 w-px bg-gray-900/10 lg:hidden"
                aria-hidden="true"
              />

              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <MainSearch />
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Separator */}
                  <div
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                    aria-hidden="true"
                  />

                  {/* Profile dropdown */}
                  <ProfileDropdown />
                </div>
              </div>
            </div>

            <main className="py-10 min-h-[800px]">
              <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
