'use client'

import Link from "next/link";
import { navigation } from "@/constants/navigation";
import { Path } from "@/constants/path";
import { usePathname } from 'next/navigation'
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === Path.SIGN_IN;
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const handlerToggle = () => setShowMobile(prev=>!prev);
  
  return (
    <header className="bg-white relative z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <a href={Path.BASE} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={handlerToggle}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {!isLoginPage &&
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={Path.SIGN_IN}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span>&rarr;</span>
            </a>
          </div>
        }
      </nav>

      {showMobile &&

      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              onClick={handlerToggle}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {!isLoginPage && 
              <div className="py-6">
              <a
                href={Path.SIGN_IN}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
            }

            </div>
          </div>
        </div>
      </div>
      }

    </header>
  );
};

export default Header;
