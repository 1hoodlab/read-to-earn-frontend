import { Modal, ModalOverlay, Spinner, useDisclosure } from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose(): void;
};

export default function LoadingPage({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay display={"flex"}>
        <Spinner
          margin={"auto"}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </ModalOverlay>
    </Modal>
  );
}
