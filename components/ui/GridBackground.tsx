import { cn } from "@/lib/utils";
import React from "react";
import { Cv } from "./Cv";

export function GridBackgroundDemo() {
  return (
    <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black-100  top-0 left-0">
      <div
        className={cn(
            "h-screen",
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widesr text-xs text-center text-blue-100 max-80">
                This Portfolio was created by me
            </h2>
             <h1 className=' justify-center text-3xl text-amber-50'>EL ATTAR MOHAMMED'S PORTFOLIO</h1>
            <Cv/>
        </div>
      </div>
    </div>
  );
}
