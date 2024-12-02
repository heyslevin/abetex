import _ from "lodash";
import CircleIcon from "../utils/CircleIcon";
import { AnimatedText } from "../fragments/AnimatedText";

export default function Metrics({ data }) {
  // Data Shape
  //
  // const data = {
  //   heading: "Heading",
  //   caption: "Caption",
  //   description: "Text",
  //   metricsGroup: [
  //     {
  //       metric: {
  //         heading: "1x",
  //         caption: "Caption",
  //         text: "Text description",
  //       },
  //     },
  //   ],
  // };

  return (
    <main
      id={_.kebabCase(data.title)}
      className="flex h-auto w-full scroll-mt-10 flex-col justify-start bg-secondary p-10 px-4 font-body text-white md:px-28"
    >
      <section className="flex flex-col">
        <figure className="mb-4 flex max-w-fit flex-row items-center justify-center gap-1 pl-1">
          <CircleIcon />
          <p className="text-sm uppercase">{data?.caption}</p>
        </figure>
        <article className="flex flex-col items-start justify-center gap-4 pb-10 md:flex-row md:items-start md:pb-24">
          <heading className="flex-1">
            <h1 className="text-balance pb-3 text-left text-4xl leading-none tracking-tight md:pb-0 md:text-6xl">
              {data?.heading}
            </h1>
          </heading>
          <div className="flex-1">
            <p className="text-xl">{data?.description}</p>
          </div>
        </article>
      </section>

      <div className="flex flex-col gap-6 md:flex-row md:justify-center">
        {data?.metricsGroup.map((metric) => {
          return (
            <div
              className="border-1 flex h-auto w-full flex-col justify-between gap-8 rounded-lg border border-transparent bg-black p-5 md:h-80 md:w-1/3"
              key={metric._key}
            >
              <div>
                {/* <h2 className="ml-[-6px] text-5xl md:text-5xl">
                  {metric.heading}
                </h2> */}
                <AnimatedText
                  text={metric.heading}
                  className="ml-[-6px] text-5xl md:text-5xl"
                />
                <h3 className="ml-[-3px] text-base font-bold uppercase">
                  {metric.caption}
                </h3>
              </div>
              <p className="text-lg">{metric.text}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
