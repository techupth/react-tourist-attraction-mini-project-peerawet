import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function Search(props) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          font-size: 2.5rem;
          font-weight: 600;
          color: rgb(45, 155, 219);
        `}
      >
        เที่ยวไหนดี
      </div>
      <form
        css={css`
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <label
          css={css`
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: -0.5px;
          `}
        >
          ค้นหาที่เกี่ยวข้อง
        </label>
        <input
          css={css`
            border: none;
            border-bottom: 2px solid #ccc;
            box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.1);
            padding: 5px;
          `}
          value={props.input}
          placeholder="หาที่เที่ยวแล้วไปกัน .."
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

export default Search;
