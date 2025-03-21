import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const LucyAvatar = () => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  );
};
