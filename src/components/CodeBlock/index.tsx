import { useColorMode } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";

export const CodeBlock = (props: any) => {
  const { colorMode } = useColorMode();

  return (
    <CopyBlock
      codeBlock
      theme={{...dracula,backgroundColor:"black"}}
      showLineNumbers={true}
      wrapLines={true}
      {...props}
    />
  );
};
