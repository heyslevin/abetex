import _ from "lodash";

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
      id={_.kebabCase(data.title)}
      className="flex w-full flex-col items-center justify-center bg-white px-5 py-8 text-black xl:px-0"
    >
      <a
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <p className="text-sm font-semibold text-[#1d9bf0]">{data.caption}</p>
      </a>
      <h1
        className="font-display animate-fade-up text-balance text-center text-4xl tracking-tight text-inherit opacity-0 drop-shadow-sm md:max-w-xl md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {data.heading}
      </h1>
      <p
        className="font-body mt-6 animate-fade-up text-balance text-center font-bold text-inherit opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        {data.tagline}
      </p>
      <div
        className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-white px-5 py-2 text-sm text-inherit transition-colors hover:bg-black hover:text-white"
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
