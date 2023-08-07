"use client";

import axios from "axios";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import { tools } from "@/constants";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log(error, "STRIPE_CLIENT_ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 py-1 font-bold">
              Venha para a Lucy Pro!
              <Badge variant="premium" className="ml-2 py-1 text-sm uppercase">
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="space-y-2 pt-2 text-center font-medium text-zinc-900">
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className="flex items-center justify-between border-black/5 p-3"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                    <tool.icon className={cn("h-6 w-6", tool.color)} />
                  </div>
                  <div className="text-sm font-semibold">{tool.label}</div>
                </div>
                <Check className="h-5 w-5 text-primary" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            className="w-full"
            variant="premium"
          >
            Adquirir Lucy Pro
            <BadgeCheck className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
