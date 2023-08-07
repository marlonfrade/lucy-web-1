import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { SettingsIcon } from "lucide-react";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Configurações"
        description="Configurações do aplicativo"
        icon={SettingsIcon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="space-y-4 px-4 lg:px-8">
        <div className="text-muted-foregorund text-sm">
          {isPro ? "Você está no plano Pro" : "Você está no plano gratuito"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
