import { Separator } from "../ui/separator";

export default function Footer() {
  const data = {
    title: "Beautiful Website Corporation",
    socials: {
      ig: "#",
      x: "#",
      li: "#",
    },
    address: "Sydney (Warrang) The Commons 388 George Street Sydney NSW 2000",
    privacyPolicy: {
      fileUrl: "#",
    },
    legal: {
      fileUrl: "#",
    },
  };

  return (
    <div className="flex h-auto flex-col bg-slate-500 px-4 py-10 md:h-[555px] md:px-28">
      <div className="flex w-full flex-col gap-6 md:flex-row">
        <div className="flex w-1/2 flex-col">
          <p className="text-xl md:text-3xl">{data.title}</p>
        </div>
        <div className="flex flex-col md:w-1/2 md:flex-row">
          <div className="flex w-1/2 flex-row">
            <div className="flex w-1/2 flex-col md:w-1/2">
              <a href={data?.socials.ig} className="">
                Instagram
              </a>
              <a href={data?.socials.li} className="">
                LinkedIn
              </a>
              <a href={data?.socials.x} className="">
                X
              </a>
            </div>
            <div className="flex w-1/2 flex-col md:w-1/2">
              <a href={data?.privacyPolicy.fileUrl}>Privacy Policy</a>
              <a href={data?.legal.fileUrl}>Legal</a>
            </div>
          </div>
          <div className="flex w-full grow text-balance pt-12 md:w-1/2 md:pt-0">
            <p>{data?.address}</p>
          </div>
        </div>
      </div>
      <Separator className="my-5 mt-20 bg-slate-800 md:mt-60" />
      <div className="flex w-full flex-row">
        <div className="flex w-1/2">
          <p className="text-sm">Copyright {new Date().getFullYear()}</p>
        </div>
        <div className="flex w-1/2 justify-end">
          <p className="text-sm">
            Code by{" "}
            <a href="" className="border-b border-black">
              Mr.Tortilla
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
