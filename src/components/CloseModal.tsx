"use client";

import { FC } from "react";
import { Button } from "./ui/Button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const CloseModal: FC = () => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      aria-label="close modal"
      className="h-6 w-6 p-0 rounded-md"
      onClick={() => router.back()}
    >
      <X className="w-4 h-6" />
    </Button>
  );
};

export default CloseModal;
