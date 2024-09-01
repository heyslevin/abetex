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
      <div
        id={data._key}
        className="flex h-[500px] w-full bg-black px-4 md:px-28"
      >
        <div className="flex w-full flex-col items-start justify-center gap-y-10 text-white">
          <div className="inline w-full text-left text-xl md:w-7/12 md:text-2xl">
            <PortableText
              value={data.textBlock}
              components={PortableParagraph}
            />
          </div>
          {data.button ? (
            <a
              className="text-md flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white px-10 py-3 text-white transition-colors hover:border-white hover:bg-white hover:text-black md:px-5 md:py-2"
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
