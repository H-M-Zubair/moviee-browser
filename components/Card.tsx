import Image from "next/image";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  imageUrl: string;
  title: string;
  releaseDate: Date;
  altText?: string;
}

export function MovieCard({
  imageUrl,
  title,
  releaseDate,
  altText = "Card image",
}: InfoCardProps) {
  return (
    <Card className="max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Release Date: {format(releaseDate, "MMMM d, yyyy")}
        </p>
      </CardContent>
    </Card>
  );
}
