export const hooks = [
  {
    slug: "use-cookie",
    name: "useCookie",
    description: "Manage cookies and make your UI react to them.",
    code: `
      import { useCookie } from "atleugim-hooks";
    
      const App = () => {
        const { value, updateCookie, deleteCookie } = useCookie("ssid");
    
        return (
          <div>
            <p>Cookie value: {value}</p>
            <div className="space-x">
              <button onClick={() => updateCookie("atleugim")}>
                Update cookie value
              </button>
              <button onClick={() => deleteCookie()}>Delete cookie</button>
            </div>
          </div>
        );
      };
    
      export default App;
    `,
  },
  {
    slug: "use-debounce",
    name: "useDebounce",
    description:
      "Handle any fast changing value, returns after the specified time period.",
    code: `
      import {useState} from "react";
      import { useDebounce } from "atleugim-hooks";

      const App = () => {
        const [value, setValue] = useState();
        const debouncedValue = useDebounce(value, 500);
      
        return (
          <div>
            <div class="space-x">
            <label id="search">Search:</label>
            <input id="search" autofocus type="search" onChange={(e) => setValue(e.target.value)} />
            </div>
            {
              debouncedValue && <p>Searching for: {debouncedValue}...</p>
            }
          </div>
        );
      };
      
      export default App;
    `,
  },
  {
    slug: "use-localstorage",
    name: "useLocalStorage",
    description:
      "Sync state to local storage so that it persists through a page refresh.",
    code: `
      import { useLocalStorage } from "atleugim-hooks";

      const App = () => {
        const { value, updateKey, deleteKey } = useLocalStorage("cart");
      
        return (
          <div>
            <p>LocalStorage value: {value}</p>
            <div className="space-x">
              <button onClick={() => updateKey("atleugim")}>
                Update localstorage value
              </button>
              <button onClick={() => deleteKey()}>Delete value</button>
            </div>
          </div>
        );
      };
      
      export default App;
    `,
  },
  {
    slug: "use-lockscroll",
    name: "useLockScroll",
    description:
      "Prevent users from being able to scroll the body of your page.",
    code: `
      import { useLockScroll } from "atleugim-hooks";

      const App = () => {
        const { lock, unlock } = useLockScroll();
      
        return (
          <div
            className="space-x lock"
          >
            <button className="lock-btn" onClick={() => lock()}>Lock Scroll</button>
            <button className="lock-btn" onClick={() => unlock()}>Unlock Scroll</button>
          </div>
        );
      };
      
      export default App;
    `,
  },
  {
    slug: "use-onclickoutside",
    name: "useOnClickOutside",
    description: "Listen for clicks outside of a specified element.",
    code: `
      import { useRef, useState } from "react";
      import { useOnClickOutside } from "atleugim-hooks";

      const App = () => {
        const ref = useRef(null);
        const [outside, setOutside] = useState(false);
      
        useOnClickOutside(ref, () => setOutside(true));
      
        return (
          <div>
            <button ref={ref} onClick={() => setOutside(false)}>
              Click me
            </button>
            <p>
              {outside
                ? "You clicked outside the button"
                : "You clicked inside the button"
              }
            </p>
          </div>
        );
      };
      
      export default App;
    `,
  },
  {
    slug: "use-onscreen",
    name: "useOnScreen",
    description: "Detects visibility of a element on the viewport.",
    code: `
      import { useRef } from "react";
      import { useOnScreen } from "atleugim-hooks";

      const App = () => {
        const ref = useRef(null);
        const isOnScreen = useOnScreen(ref, 200);
      
        return (
          <div>
            <div className={isOnScreen ? "on-screen onscreen" : "not-on-screen onscreen"}
            />
            <p ref={ref}>isOnScreen: {isOnScreen ? "Yes" : "No"}</p>
          </div>
        );
      };
      
      export default App;
    `,
  },
  {
    slug: "use-copytoclipboard",
    name: "useCopyToClipboard",
    description: "Copy any text and save it to the clipboard.",
    code: `
      import { useState } from 'react'
      import { useCopyToClipboard } from "atleugim-hooks";
    
      const App = () => {
        const [text, setText] = useState(null)
        const { copiedText, copy } = useCopyToClipboard()

        const handleCopy = async () => {
          if (!text) return;
          

          // If it does not seem to work, it is only a CodeSandbox problem.
          // it works fine in the browser.
          await copy(text)
        }
      
        return (
          <div>
            <div className="space-x">
              <input type="text" onChange={(e) => setText(e.target.value)} />
              <button onClick={handleCopy}>Copy</button>

              <p>Copied text: {copiedText}</p>
            </div>
          </div>
        );
      };
      
      export default App; 
    `,
  },
  {
    slug: "use-hover",
    name: "useHover",
    description: "Detect whether the mouse is hovering an element.",
    code: `
      import { useRef } from 'react'
      import { useHover } from "atleugim-hooks";
    
      const App = () => {
        const elementRef = useRef(null)
        const isHovered = useHover(elementRef)
      
        return (
          <div ref={elementRef} className={isHovered ? "hovered hover" : "not-hovered hover"}>
            {
              isHovered ? "Hovered" : "Not hovered"
            }
          </div>
        );
      };
      
      export default App; 
    `,
  },
];
