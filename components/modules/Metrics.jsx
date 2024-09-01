import _ from "lodash";

export default function Metrics({ data }) {
  // Data Shape
  //
  // const data = {
  //   heading: "Heading",
  //   caption: "Caption",
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
      className="justify-left flex h-auto w-full flex-col bg-zinc-200 p-10 px-4 md:h-[750px] md:px-28"
    >
      <div className="flex flex-col justify-center pb-10 md:items-center md:pb-24">
        <p className="mb-4 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
          For Customers
        </p>
        <h1 className="text-left text-5xl font-bold leading-[3rem] tracking-tight">
          Instant service, exceptional experiences
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:justify-center">
        {data.metricsGroup.map((metric) => {
          return (
            <div
              className="border-1 flex h-auto w-full flex-col justify-between gap-8 rounded-lg border border-black p-3 md:h-80 md:w-1/3"
              key={metric._key}
            >
              <div>
                <h2 className="ml-[-6px] text-7xl md:text-8xl">
                  {metric.heading}
                </h2>
                <h3 className="">{metric.caption}</h3>
              </div>
              <p className="text-lg">{metric.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
