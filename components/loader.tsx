import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-40 w-40">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <div className="flex items-center justify-center space-x-1 text-sm text-gray-700">
        <svg
          fill="none"
          className="h-6 w-6 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <p className="text-sm text-muted-foreground">Lucy está pensando ...</p>
      </div>
    </div>
  );
};
