"use client";
import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Card } from "@/components/ui/card";

export default function InstagramCard({ url }: { url: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient)
    return (
      <div className="h-64 w-full animate-pulse rounded-lg dark:bg-transparent" />
    );

  return (
    <Card
      suppressHydrationWarning
      className="group border-0 shadow-none items-center py-0 dark:bg-transparent"
    >
      <InstagramEmbed
        url={url}
        style={{
          maxWidth: 528,
          minWidth: 328,
          maxHeight: 533,
        }}
        placeholderDisabled
      />
    </Card>
  );
}
