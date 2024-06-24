import { Flex } from "@mantine/core";
import { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default MainLayout;
