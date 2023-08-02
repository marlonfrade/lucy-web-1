import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversar com Lucy"
        description="Tire suas dúvidas com Lucy, fale agora no chat e obtenha sua resposta em tempo real."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default ConversationPage;
