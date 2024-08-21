export default function Accordion({ data }) {
  // const data = {
  //   heading: "Faqs",
  //   text: "Questions? We have answers",
  //   items: [
  //     {
  //       title: "",
  //       description: "",
  //       _key: "randomKey",
  //     },
  //     {
  //       title: "",
  //       description: "",
  //       _key: "randomKey2",
  //     },
  //   ],
  // };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center bg-zinc-200 px-4 py-24 md:px-28">
      <div className="flex h-full w-full flex-col gap-12 md:flex-row md:gap-4">
        <div className="justify-start md:w-1/2">
          <h2 className="text-4xl font-bold md:text-6xl">{data.heading}</h2>
          <p className="inline w-10/12 text-left text-lg md:text-xl">
            {data.text}
          </p>
        </div>
        <div className="h-full md:w-1/2">
          <Accordion type="single" collapsible>
            {data.items.map((item) => {
              return (
                <AccordionItem
                  value={item._key}
                  key={item_key}
                  className="border-b border-black hover:text-gray-700"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
