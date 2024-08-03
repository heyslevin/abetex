"use client";

export default function Home() {
  return (
    <>
      <div className="z-10 m-auto w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="animate-fade-up mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Precedent
          </p>
        </a>
        <h1 className="font-display bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
          Building blocks for your Next project
        </h1>
        <p className="mt-6 text-center text-white [text-wrap:balance] md:text-xl">
          An opinionated collection of components, hooks, and utilities for your
          Next.js project.
        </p>
        <div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-gray-500 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Deploy to Vercel</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/steven-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
            </p>
          </a>
        </div>
      </div>
      <div className="animate-fade-up my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0"></div>
    </>
  );
}
