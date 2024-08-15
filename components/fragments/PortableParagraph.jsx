export const PortableParagraph = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("?")
        ? "norefferer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="border-b border-white hover:border-red-500"
        >
          {children}
        </a>
      );
    },
  },
};
