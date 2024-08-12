import { Separator } from "@/components/ui/separator";
import React, { forwardRef } from "react";

const TabData = (props, forwardRef) => (
  <button {...props} ref={forwardRef}>
    <Separator {...props} className="data-[state=active]:bg-black" />
    <div className="flex h-full flex-col py-4">
      <h1 className="text-md text-left font-bold">Omnichannel</h1>
      <p className="text-left">
        Help customers find accurate answers when and where they need them.
        Always there, 24/7
      </p>
    </div>
  </button>
);

export default React.forwardRef(TabData);
