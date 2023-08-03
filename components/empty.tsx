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
          <Image alt="empty conversation" fill src="/conversation-empty.png" />
        );
      case "/code":
        return <Image alt="empty code" fill src="/code-empty.png" />;

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
