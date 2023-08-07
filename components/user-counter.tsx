"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MAX_FREE_COUNTS } from "@/constants";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

interface UserCounterProps {
  apiLimitCount: number;
}

const UserCounter = ({ apiLimitCount = 0 }: UserCounterProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }
  return (
    <div className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-center text-sm text-white">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS} Criação de áudios e vídeos
              gratuitos
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button className="w-full" variant="premium">
            Adquirir Lucy Pro
            <BadgeCheck className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCounter;
