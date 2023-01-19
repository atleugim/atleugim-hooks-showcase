import { Sandpack } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import { styles } from "../utils/code.styles";

interface CustomSandpackProps {
  code: string;
}

const CustomSandpack = ({ code }: CustomSandpackProps) => {
  return (
    <Sandpack
      theme={atomDark}
      customSetup={{
        dependencies: {
          "atleugim-hooks": "0.1.0",
        },
      }}
      files={{
        "/App.js": code,
        "/styles.css": styles,
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        resizablePanels: true,
      }}
      template="react"
    />
  );
};

export default CustomSandpack;
