function Hero({ data }) {
  // Data Structure
  //
  // const data = {
  //   heading: "Welcome to my dummy text website",
  //   tagline: "Have you ever seen something as beautiful",
  //   caption: "Presenting Myself",
  //   button: {
  //     text: "Learn now",
  //     link: "href://www.duos.com",
  //   },
  // };

  return (
    <div
      id={data._key}
      className="z-10 m-auto w-full max-w-xl px-5 py-8 xl:px-0"
    >
      <a
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <p className="text-sm font-semibold text-[#1d9bf0]">{data.caption}</p>
      </a>
      <h1 className="font-display text-balance text-center text-4xl font-bold tracking-tight text-white drop-shadow-sm md:text-7xl md:leading-[5rem]">
        {data.heading}
      </h1>
      <p className="mt-6 text-balance text-center text-white md:text-xl">
        {data.tagline}
      </p>
      <div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-gray-500 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
          hfef={data.button.link}
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
  );
}

export default Hero;
