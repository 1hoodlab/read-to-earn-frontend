import { Modal, ModalOverlay, Spinner, useDisclosure } from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
};

export default function Lab({}: Props) {
  const { onClose } = useDisclosure();
  return (
    <Modal isOpen={true} onClose={onClose}>
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
