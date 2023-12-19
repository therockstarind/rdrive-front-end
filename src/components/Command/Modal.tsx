"use client";

import { Dispatch, SetStateAction } from "react";
import { Drawer } from "vaul";
import { Dialog } from "@radix-ui/themes";
import useMediaQuery from "®/hooks/use-media-query";

export default function Modal({
  children,
  showModal,
  setShowModal,
}: {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root shouldScaleBackground open={showModal} onOpenChange={setShowModal}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/10 z-40" />
          <Drawer.Content className="fixed bottom-0 bg-white p-4 z-40" >
            {children}
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
    );
  }

  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
        <Dialog.Content
          className="p-0 max-w-3xl"
        >
          {children}
        </Dialog.Content>
    </Dialog.Root>
  );
}