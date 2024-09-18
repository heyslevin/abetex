import _ from "lodash";
import CircleIcon from "../utils/CircleIcon";

export default function Metrics({ data }) {
  console.log({ metric: data });
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
    <div
      id={_.kebabCase(data.title)}
      className="justify-left font-body flex h-auto w-full scroll-mt-10 flex-col bg-secondary p-10 px-4 text-white md:h-[750px] md:px-28"
    >
      <div className="flex flex-col">
        <div className="mb-4 flex max-w-fit flex-row items-center justify-center gap-1 pl-1">
          <CircleIcon />
          <p className="text-sm uppercase">{data?.caption}</p>
        </div>
        <div className="flex flex-row items-start justify-center gap-4 pb-10 md:items-start md:pb-24">
          <div className="flex-1">
            <h1 className="text-balance text-left text-6xl leading-none tracking-tight">
              {data?.heading}
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-xl">{data?.description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:justify-center">
        {data?.metricsGroup.map((metric) => {
          return (
            <div
              className="border-1 flex h-auto w-full flex-col justify-between gap-8 rounded-lg border border-transparent bg-black p-5 md:h-80 md:w-1/3"
              key={metric._key}
            >
              <div>
                <h2 className="ml-[-6px] text-5xl md:text-5xl">
                  {metric.heading}
                </h2>
                <h3 className="ml-[-3px] text-base font-bold uppercase">
                  {metric.caption}
                </h3>
              </div>
              <p className="text-lg">{metric.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
