"use client";

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("[BILLING_ERROR]", error);
      toast.error("Ocorreu um erro, tente novamente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      onClick={onClick}
      variant={isPro ? "default" : "premium"}
    >
      {isPro ? "Gerenciar Assinatura" : "Faça upgrade para Lucy Pro"}
      {!isPro && <BadgeCheck className="ml-2 h-4 w-4" />}
    </Button>
  );
};
