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
    <main
      id={_.kebabCase(data.title)}
      className="flex w-full flex-col items-start justify-center bg-white px-5 py-8 text-black md:px-28"
    >
      {data.caption && (
        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-primary px-7 py-2 transition-colors hover:bg-primary-foreground"
        >
          <p className="text-sm font-semibold text-white">{data.caption}</p>
        </a>
      )}
      <h1
        className="font-display animate-fade-up text-balance text-left text-3xl tracking-tight text-inherit opacity-0 drop-shadow-sm md:max-w-5xl md:text-6xl md:leading-none"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {data?.heading}
      </h1>
      {data?.tagline && (
        <p
          className="font-body mt-6 animate-fade-up text-balance text-center text-inherit opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          {data?.tagline}
        </p>
      )}

      {data?.button && (
        <div
          className="mt-6 flex animate-fade-up space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-white px-5 py-2 text-sm text-inherit transition-colors hover:bg-black hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            hfef={data?.button?.link}
          >
            <p>{data?.button?.text}</p>
          </a>
        </div>
      )}
    </main>
  );
}

export default Hero;
