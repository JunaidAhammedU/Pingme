import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface RightDrawerProps {
  children: React.ReactNode;
}

const RightDrawer = ({ children }: RightDrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Chat Histories</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam, voluptatibus, quos, quidem quod quia quae quibusdam
            voluptatibus, quos, quidem quod quia quae. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Illum, ducimus. Repudiandae id
            error laboriosam sapiente. Hic corrupti molestiae, a repellendus,
            quisquam minima laborum magni, ipsum delectus molestias nesciunt ad
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam quibusdam, voluptatibus, quos, quidem quod quia quae
            quibusdam voluptatibus, quos, quidem quod quia quae. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Illum, ducimus.
            Repudiandae id error laboriosam sapiente. Hic corrupti molestiae, a
            repellendus, quisquam minima laborum magni, ipsum delectus molestias
            nesciunt ad adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam quibusdam, voluptatibus, quos, quidem
            quod quia quae quibusdam voluptatibus, quos, quidem quod quia quae.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            ducimus. Repudiandae id error laboriosam sapiente. Hic corrupti
            molestiae, a repellendus, quisquam minima laborum magni, ipsum
            delectus molestias nesciunt ad adipisci.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default RightDrawer;
