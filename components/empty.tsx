import Image from "next/image";
import { usePathname } from "next/navigation";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  const pathname = usePathname();

  const getEmptyImage = () => {
    switch (pathname) {
      case "/conversation":
        return (
          <Image
            alt="empty conversation"
            fill
            src="/conversation-empty.png"
            key={pathname}
          />
        );
      case "/code":
        return (
          <Image alt="empty code" fill src="/code-empty.png" key={pathname} />
        );

      case "/image":
        return (
          <Image alt="empty image" fill src="/image-empty.png" key={pathname} />
        );
      case "/music":
        return (
          <Image alt="empty music" fill src="/music-empty.png" key={pathname} />
        );
      case "/video":
        return (
          <Image alt="empty video" fill src="/video-empty.png" key={pathname} />
        );

      default:
        break;
    }
  };

  return (
    <div className="flex h-full flex-col items-center p-20">
      <div className="relative h-72 w-72">{getEmptyImage()}</div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
