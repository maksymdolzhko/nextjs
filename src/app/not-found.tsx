import Link from "next/link";
import ContentWrapper from "@/components/ContentWrapper";
import { Path } from "@/constants/path";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found page - title",
  description: "Not found page - description",
};

export default function NotFound() {
  return (
    <ContentWrapper>
      <p className="text-2xl font-semibold text-indigo-600">404</p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-6 text-base leading-7 text-gray-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href={Path.BASE}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
        <Link href={Path.CONTACT} className="text-sm font-semibold text-gray-200">
          Contact support <span>&rarr;</span>
        </Link>
      </div>
    </ContentWrapper>
  );
}
