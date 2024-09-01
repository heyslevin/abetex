import Image from "next/image";

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
  // };

  return (
    <div
      id={data._key}
      className="flex h-auto w-full flex-col-reverse justify-center gap-9 bg-white p-10 px-4 md:h-[500px] md:flex-row md:px-28"
    >
      <div className="flex h-full flex-1 flex-col content-center justify-center gap-6 text-black md:gap-6">
        <h1 className="font-display text-balance text-left text-3xl font-bold leading-none tracking-tight drop-shadow-sm md:text-4xl md:leading-[2rem]">
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
      </div>
      <div className="flex-column flex-1 overflow-hidden rounded-lg text-black">
        <Image
          src={data.image.imageUrl}
          alt={data.image.alt}
          width={1200}
          height={1200}
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}

export default TextWithImage;
