import { MenuDivider } from "@sanity/ui";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";

export default function Header({ data }) {
  console.log({ headerData: data });
  return (
    <div className="flex w-full flex-row justify-between border-b border-gray-800 bg-black px-5 py-5 text-white">
      <div className="flex">Awesome Company</div>
      <div className="flex flex-row gap-5">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent
              className="h-full bg-black text-left text-white sm:text-left"
              side="top"
            >
              <SheetHeader>
                <SheetTitle className="text-white">Awesome Company</SheetTitle>
                {/* <SheetDescription>Here it is</SheetDescription> */}
                <div className="flex flex-col pt-8 text-3xl">
                  <div className="w-full border-t border-gray-800 py-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      About us
                    </a>
                  </div>

                  <div className="w-full border-t border-gray-800 py-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Services
                    </a>
                  </div>
                  <div className="w-full border-t border-gray-800 py-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Contact Us
                    </a>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden flex-row gap-4 md:flex">
          <a href="#" target="_blank" rel="noopener noreferrer">
            About us
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Services
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
