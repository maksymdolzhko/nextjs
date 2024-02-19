import { newsList } from "./dataNews";
import { INews } from "./types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News common page - title",
  description: "News common - description",
};

export default function News() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News. Best articles from our blog.
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {newsList.map((item: INews) => {
            return (
              <article
                key={item.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={item.datetime} className="text-gray-500">
                    {item.date}
                  </time>
                  <a
                    href={item.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {item.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={item.href}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={item.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={item.author.href}>
                        <span className="absolute inset-0" />
                        {item.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{item.author.role}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
