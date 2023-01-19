import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import { styles } from "../utils/code.styles";

interface CustomSandpackProps {
  code: string;
}

const CustomSandpack = ({ code }: CustomSandpackProps) => {
  return (
    <SandpackProvider
      template="react"
      files={{
        "/App.js": code,
        "styles.css": styles,
      }}
      customSetup={{
        dependencies: {
          "atleugim-hooks": "0.1.0",
        },
      }}
    >
      <SandpackThemeProvider theme={atomDark}>
        <SandpackLayout className="flex flex-col">
          <SandpackPreview />
          <SandpackCodeEditor showTabs={false} showLineNumbers />
        </SandpackLayout>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
};

export default CustomSandpack;
