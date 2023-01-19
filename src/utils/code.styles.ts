export const styles = `
  body {
    font-family: sans-serif;
    -webkit-font-smoothing: auto;
    -moz-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: auto;
    text-rendering: optimizeLegibility;
    font-smooth: always;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  .space-x > * + * {
    margin-left: 0.5rem;
  }

  .lock {
    height: 200vh;
  }
  
  .lock-btn {
    position: sticky;
    top: 8px;
  }

  .hover {
    width: 100%;
    height: 33vh;
    display: grid;
    place-items: center;
    transition: all 0.3s ease;
    border-radius: 0.15rem;
  }

  .onscreen {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    transition: all 0.3s ease;
    border-radius: 0.15rem;
  }

  .hovered, .on-screen {
    background-color: #7C3AED;
    color: #D0D0D0;
  }
  .not-hovered, .not-on-screen {
    background-color: #D0D0D0;
    color: #7C3AED;
  }
`;
