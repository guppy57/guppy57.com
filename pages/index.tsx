import { cn } from "@/lib/utils";
import Image from "next/image";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import ContainerWide from "@/components/ContainerWide";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useMemo, useState } from "react";
import IKreation from "@/types/IKreation";
import getKreations from "@/lib/getKreations";
import tags from "@/lib/tags";
import ITag from "@/types/ITag";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import icons from "@/lib/icons";

type IconKeys = keyof typeof icons;

interface HomeProps {
  tags: ITag[];
  kreations: IKreation[];
}

export default function Home(props: HomeProps) {
  const [tag, setTag] = useState<string>("all");
  const [open, setOpen] = useState<boolean>(false);
  const [selectedKreation, setSelectedKreation] = useState<IKreation | null>();

  console.log(props.kreations);

  const filteredKreations = useMemo(() => {
    return props.kreations.filter((kreation: IKreation) => {
      if (tag === "all") return true;
      return kreation.tags.includes(tag);
    });
  }, [props.kreations, tag]);

  return (
    <div>
      <NextSeo title="Home" description="Radical starts here." />
      <Navbar activeLink="home" />
      <ContainerWide>
        <div className="space-x-4 mb-6">
          {tags.map((tag: ITag, index: number) => (
            <span
              key={index}
              className={cn(
                tag.value === "all" ? "text-blue-500" : "text-gray-500",
                "cursor-pointer hover:text-blue-500"
              )}
              onClick={() => setTag(tag.value)}
            >
              {tag.value}
            </span>
          ))}
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {filteredKreations.map((kreation: IKreation, index: number) => (
              <div
                key={index}
                className="p-6 bg-[#F7F7F2] rounded-2xl max-h-[24rem] cursor-pointer"
                onClick={() => {
                  setSelectedKreation(kreation);
                  setOpen(true);
                }}
              >
                <div className="h-72 w-full flex items-center justify-center">
                  <Image
                    src={icons[kreation.name as IconKeys].src}
                    alt={kreation.name}
                    className="h-48 w-auto shadow-lg"
                    width={200}
                    height={200}
                    // className={icons[kreation.name as IconKeys].className}
                  />
                </div>
                <div>
                  <h2 className="font-medium tracking-tight text-md">
                    {kreation.name}
                  </h2>
                  <p className="text-sm">{kreation.description}</p>
                </div>
              </div>
            ))}
          </div>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedKreation?.name}</DialogTitle>
              <DialogTrigger>
                <button
                  className="p-2 text-gray-500 hover:text-blue-500"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </DialogTrigger>
            </DialogHeader>
            <DialogDescription>
              <p>{selectedKreation?.description}</p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </ContainerWide>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}

export async function getStaticProps() {
  const kreations: IKreation[] = await getKreations();

  console.log(kreations[0].icon.asset);

  return {
    props: {
      kreations,
      tags, // TODO make this both tags and the statuses for people to filter with, you can filter by both status and tag?
    },
  };
}
