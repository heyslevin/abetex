import Image from "next/image";

function TextWithIllustration({ data }) {
  console.log(data);
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
    <div className="flex h-[500px] w-full justify-center gap-9 bg-white p-10 px-28">
      <div className="flex h-full flex-1 flex-col content-center justify-center text-black">
        <h1 className="font-display text-balance text-left text-xl font-bold tracking-tight drop-shadow-sm md:text-4xl md:leading-[2rem]">
          {data.heading}
        </h1>
        <p className="mt-6 inline w-10/12 text-left md:text-xl">{data.text}</p>
        <a
          href={data.button.url}
          className="mt-6 max-w-fit border-b border-black text-xl hover:border-red-500"
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

export default TextWithIllustration;
