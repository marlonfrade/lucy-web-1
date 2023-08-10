"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";

import { VideoIcon } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { LucyAvatar } from "@/components/lucy-avatar";

const VideoResumePage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [resume, setResume] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instruction: "",
      link: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (resume.length > 0) {
        setResume("");
      }
      const response = await axios.post("/api/video-resume", values);

      setResume(response.data.data);
      console.log(response);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Ocorreu um erro, tente novamente");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Lucy Resumos"
        description="resuma seu vídeo usando a tecnologia da Lucy, insira um link para o vídeo junto com seu prompt e a Lucy vai te ajudar a resumir o seu vídeo."
        icon={VideoIcon}
        iconColor="text-red-500"
        bgColor="bg-red-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
            >
              {" "}
              <FormField
                name="instruction"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Lucy, me liste os tópicos principais do vídeo"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Link do vídeo"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 w-full lg:col-span-2"
                disabled={isLoading}
              >
                Enviar
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="mx-auto flex w-full items-center justify-center rounded-lg bg-violet-500/10 p-8">
              <Loader />
            </div>
          )}
          {resume.length === 0 && !isLoading && (
            <Empty label="Qual vídeo você quer resumir ?" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {resume.length > 1 && (
              <div className="flex w-full items-start gap-x-8 rounded-lg border border-black/10 bg-white p-8">
                <LucyAvatar />
                <p className="text-sm ">{resume}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResumePage;
