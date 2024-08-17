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
    <div className="flex h-[750px] w-full flex-col items-center justify-center bg-zinc-200 p-10 px-28">
      <p className="mb-4 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
        {data.caption}
      </p>
      <h1 className="text-left text-5xl font-bold leading-[3rem] tracking-tight">
        {data.heading}
      </h1>
      <div className="mt-24 flex w-full flex-row justify-center gap-5">
        {data.metricsGroup.map((metric) => {
          return (
            <div
              className="border-1 flex h-80 w-1/3 flex-col justify-between rounded-lg border border-black p-3"
              key={metric._key}
            >
              <div className="">
                <h2 className="ml-[-6px] text-8xl">{metric.heading}</h2>
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
