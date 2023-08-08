"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("24177ed4-c22a-4230-a193-9447f2ad8660", {
      locale: "pt-BR",
    });
  }, []);

  return null;
};
