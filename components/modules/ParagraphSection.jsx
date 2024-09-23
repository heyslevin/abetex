import { PortableText } from "next-sanity";
import { PortableParagraph } from "../fragments/PortableParagraph";
import _ from "lodash";
import CircleIcon from "../utils/CircleIcon";
import { classNames } from "../utils/helpers";

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
  //     textAlign: "center" || "left"
  //
  //
  //   };

  console.log({ paragraph: data });
  return (
    <main
      id={_.kebabCase(data?.title)}
      className={classNames(
        "flex w-full scroll-mt-10 p-10 px-4 md:px-28 md:py-10",
        data.textAlign === "center"
          ? "bg-secondary font-display text-white"
          : "bg-primary font-body text-white",
      )}
    >
      <section
        className={classNames(
          "flex w-full flex-col justify-center gap-y-6 text-inherit",
          data.textAlign === "center" ? "items-center" : "items-start",
        )}
      >
        {data?.caption && (
          <figure className="flex max-w-fit flex-row items-center justify-center gap-1 font-body text-base">
            <CircleIcon />
            <p className="text-sm uppercase">{data?.caption}</p>
          </figure>
        )}

        <article
          className={classNames(
            "flex text-balance text-inherit",
            data.textAlign === "center"
              ? "w-2/3 text-center"
              : "w-full text-left",
          )}
        >
          <PortableText
            value={data?.textBlock}
            components={PortableParagraph}
          />
        </article>
        {data?.button ? (
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
