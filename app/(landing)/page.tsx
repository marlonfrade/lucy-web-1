import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface ILandingPageProps {}

const LandingPage = (props: ILandingPageProps) => {
  return (
    <div>
      Landing Page(Unprotected)
      <Link href="/sign-in">
        <Button>Fazer Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Fazer Cadastro</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
