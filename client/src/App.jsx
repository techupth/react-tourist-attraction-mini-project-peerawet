import Search from "./comonent/Search";
import Contents from "./comonent/Contents";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 2rem;
      `}
    >
      <Search input={input} setInput={setInput} />
      <Contents input={input} setInput={setInput} />
    </div>
  );
}

export default App;
