"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

type propsForTutorial = {
  tutorialContent: any;
};

export default function Tutorial(props: propsForTutorial) {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const [indexOfModal, setIndexOfModal] = useState<number>(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:1224px)" });

  return (
    <Modal
      isOpen={isModalVisible}
      isDismissable
      closeButton={<></>}
      className="min-h-[600px]"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {props.tutorialContent[indexOfModal]?.header}
        </ModalHeader>
        <ModalBody className="flex h-full flex-col justify-center">
          {props.tutorialContent[indexOfModal]?.body}
        </ModalBody>
        <ModalFooter className={isTabletOrMobile ? "mb-4" : ""}>
          <Button
            color="danger"
            variant="light"
            onPress={() => {
              if (indexOfModal == 0) {
                setIsModalVisible(false);
              } else {
                setIndexOfModal((indexOfModal) => {
                  return indexOfModal - 1;
                });
              }
            }}
          >
            {indexOfModal == 0 ? "넘어가기" : "돌아가기"}
          </Button>
          <Button
            color="primary"
            onPress={() => {
              if (indexOfModal == props.tutorialContent.length - 1) {
                setIsModalVisible(false);
              } else {
                setIndexOfModal((indexOfModal) => {
                  return indexOfModal + 1;
                });
              }
            }}
          >
            {indexOfModal == props.tutorialContent.length - 1
              ? "시작하기"
              : "다음으로"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
