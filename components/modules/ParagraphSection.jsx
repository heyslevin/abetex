import { PortableText } from "next-sanity";
import { PortableParagraph } from "../fragments/PortableParagraph";

function ParagraphSection({ data }) {
  // Data Structure
  //
  //   const data = {
  //     textBlock,
  //     button: {
  //       text,
  //       url,
  //     },
  //   };

  return (
    <div>
      <div className="flex h-[500px] w-full bg-black px-28">
        <div className="flex w-full flex-col items-start justify-center gap-y-10 text-white">
          <div className="inline w-7/12 text-left md:text-2xl">
            <PortableText
              value={data.textBlock}
              components={PortableParagraph}
            />
          </div>
          {data.button ? (
            <a
              className="text-md flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white px-5 py-2 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
              href={data.button.url}
            >
              <p>{data.button.text}</p>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ParagraphSection;
