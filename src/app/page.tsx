import type { Metadata } from "next";
import ContentWrapper from "@/components/ContentWrapper";
import { Path } from "@/constants/path";

export const metadata: Metadata = {
  title: "My Next App - Home page",
  description: "My Next App - Home page description",
};

export default function Home() {
  return (
    <ContentWrapper>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Data to enrich your online business
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href={Path.SIGN_IN}
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Get started
        </a>
        <a href={Path.NEWS} className="text-sm font-semibold leading-6 text-white">
          Learn more <span>→</span>
        </a>
      </div>
    </ContentWrapper>
  );
}
