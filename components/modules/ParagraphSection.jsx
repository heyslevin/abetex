import { PortableText } from "next-sanity";
import { PortableParagraph } from "../fragments/PortableParagraph";
import _ from "lodash";
import CircleIcon from "../utils/CircleIcon";

function ParagraphSection({ data }) {
  // Data Structure
  //
  //   const data = {
  //     caption,
  //     textBlock,
  //     button: {
  //       text,
  //       url,
  //     },
  //   };

  return (
    <main
      id={_.kebabCase(data.title)}
      className="font-body flex w-full scroll-mt-10 bg-primary p-10 px-4 md:px-28 md:py-20"
    >
      <section className="flex w-full flex-col items-start justify-center gap-y-6 text-white">
        {data?.caption && (
          <figure className="flex max-w-fit flex-row items-center justify-center gap-1">
            <CircleIcon />
            <p className="text-sm uppercase">{data?.caption}</p>
          </figure>
        )}

        <article className="inline w-full text-balance text-left text-white">
          <PortableText value={data.textBlock} components={PortableParagraph} />
        </article>
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
      </section>
    </main>
  );
}

export default ParagraphSection;
