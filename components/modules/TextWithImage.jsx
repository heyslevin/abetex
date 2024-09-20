import _ from "lodash";
import Image from "next/image";
import { Separator } from "../ui/separator";

function TextWithImage({ data }) {
  // Data Structure

  // const data = {
  //   heading: "Welcome to my dummy text website",
  //   text: "Have you ever seen something as beautiful",
  //   image: {
  //     imageUrl: "https://www.tester.com",
  //     alt: "Alt Description",
  //   },
  //   button: {
  //     text: "Learn now",
  //     link: "href://www.duos.com",
  //   },
  //   style: ['default','strokes']
  //
  // };

  if (data?.style === "strokes") {
    return (
      // Padding after vertical border
      <div className="bg-primary pb-7">
        {/* Wraps for vertical border to not overflow */}
        <div className="relative bg-primary">
          {/* Floating vertical border centered */}
          <Separator
            orientation="vertical"
            className="left-0 right-0 m-auto hidden h-full overflow-clip border-r border-white md:absolute md:block"
          />
          <main
            id={_.kebabCase(data.title)}
            className="font-body flex w-full scroll-mt-10 flex-col-reverse justify-center gap-16 border-y border-white bg-primary p-10 px-4 text-white md:flex-row-reverse md:px-28"
          >
            <article className="flex flex-1 flex-col items-stretch justify-between gap-6 md:gap-6">
              <h1 className="text-balance text-left text-2xl leading-none tracking-tight drop-shadow-sm md:text-3xl md:leading-[2rem]">
                {data.heading}
              </h1>
              <div className="flex flex-col gap-2">
                <p className="inline w-10/12 text-left text-lg md:text-xl">
                  {data.text}
                </p>
                {data?.button && (
                  <a
                    href={data.button.url}
                    className="max-w-fit border-b border-white pt-4 text-lg hover:border-red-500 md:text-xl"
                  >
                    {data.button.text}
                  </a>
                )}
              </div>
            </article>

            <aside className="flex-column flex-1 overflow-hidden text-black">
              <Image
                src={data.image.imageUrl}
                alt={data.image.alt}
                width={1200}
                height={1200}
                className="h-full object-cover"
                placeholder="blur"
                blurDataURL={data.image.blurDataURL}
              />
            </aside>
          </main>
        </div>
      </div>
    );
  } else {
    // Default style
    <main
      id={_.kebabCase(data.title)}
      className="font-body flex h-auto w-full scroll-mt-10 flex-col-reverse justify-center gap-9 bg-white p-10 px-4 md:h-[500px] md:flex-row md:px-28"
    >
      <article className="flex h-full flex-1 flex-col content-center justify-center gap-6 text-black md:gap-6">
        <h1 className="text-balance text-left text-3xl leading-none tracking-tight drop-shadow-sm md:text-4xl md:leading-[2rem]">
          {data.heading}
        </h1>
        <p className="inline w-10/12 text-left text-lg md:text-xl">
          {data.text}
        </p>
        <a
          href={data.button.url}
          className="max-w-fit border-b border-black pt-4 text-lg hover:border-red-500 md:text-xl"
        >
          {data.button.text}
        </a>
      </article>
      <aside className="flex-column flex-1 overflow-hidden rounded-lg text-black">
        <Image
          src={data.image.imageUrl}
          alt={data.image.alt}
          width={1200}
          height={1200}
          className="h-full object-cover"
          placeholder="blur"
          blurDataURL={data.image.blurDataURL}
        />
      </aside>
    </main>;
  }
}

export default TextWithImage;
