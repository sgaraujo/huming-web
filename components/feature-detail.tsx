// app/components/feature-detail.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type FeatureDetailProps = {
  item: {
    category?: string;
    title: string;
    details: string;
    image: string;
    tutorialLink?: string;
  } | null;
};

export default function FeatureDetail({ item }: FeatureDetailProps) {
  if (!item) return null;

  return (
    <div
      id="feature-detail"
      className="mt-16 md:mt-24"
      aria-live="polite"
    >
      <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
        <div className="relative w-full aspect-[6/4] rounded-xl border border-border/50 basis-1/2 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="basis-1/2 shrink-0">
          {item.category && (
            <span className="uppercase font-semibold text-sm text-muted-foreground">
              {item.category}
            </span>
          )}
          <h4 className="my-3 text-3xl font-semibold tracking-tight">{item.title}</h4>
          <p className="text-muted-foreground text-[17px]">{item.details}</p>

          {item.tutorialLink && (
            <Button
              asChild
              className="mt-6 rounded-full min-w-40 text-[15px] bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Link href={item.tutorialLink}>Más información</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
