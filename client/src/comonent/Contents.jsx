import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import axios from "axios";
import { useEffect, useState } from "react";

function Contents(props) {
  const [contents, setContents] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${props.input}`
    );
    setContents(response.data.data);
  };
  useEffect(() => {
    getData();
  }, [props.input]);

  const copyToClipboard = (index) => {
    const textToCopy = contents[index].url;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Unable to copy URL to clipboard", err);
      });
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 3rem;
      `}
    >
      {contents.map((content, index) => {
        return (
          <div
            key={index}
            css={css`
              display: flex;
              flex-direction: row;
              width: 80%;
              justify-content: center;
              gap: 1.5rem;
              position: relative;
              width: 60%;
            `}
          >
            <img
              onClick={() => {
                copyToClipboard(index);
              }}
              css={css`
                position: absolute;
                bottom: 0;
                right: 0;
                width: 5rem;
              `}
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrHT3pP8WVXhrxZzxUwMcwXBPIgnM2LCBeC9tG5UyGOWYW9pjI"
            ></img>
            <img
              src={content.photos[0]}
              css={css`
                width: 30%;
                border-radius: 20px;
              `}
            ></img>

            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <a
                href={content.url}
                target="blank"
                css={css`
                  font-size: 1.3rem;
                  text-decoration: none;
                  color: black;
                  font-weight: 700;
                  letter-spacing: -0.5px;
                `}
              >
                {content.title}
              </a>
              <div
                css={css`
                  font-size: 0.9rem;
                  color: rgb(140, 140, 140);
                  letter-spacing: -0.5px;
                  font-weight: 500;
                `}
              >
                {content.description.slice(0, 100)}
              </div>
              <a
                href={content.url}
                target="blank"
                css={css`
                  font-size: 0.8rem;
                  color: rgb(45, 155, 219);
                  letter-spacing: -0.5px;
                  font-weight: 500;
                `}
              >
                อ่านต่อ
              </a>
              <div>
                <span
                  css={css`
                    font-size: 0.8rem;
                    color: rgb(140, 140, 140);
                    letter-spacing: -0.5px;
                    font-weight: 500;
                  `}
                >
                  หมวด
                </span>
                {content.tags.map((tag, index) =>
                  index === content.tags.length - 1 ? (
                    <>
                      <span
                        css={css`
                          font-size: 0.8rem;
                          color: rgb(140, 140, 140);
                          letter-spacing: -0.5px;
                          font-weight: 500;
                        `}
                      >
                        {" "}
                        และ{" "}
                      </span>
                      <u
                        css={css`
                          font-size: 0.8rem;
                          color: rgb(140, 140, 140);
                          letter-spacing: -0.5px;
                          font-weight: 500;
                        `}
                        onClick={() => {
                          props.setInput(tag);
                        }}
                      >{`${tag}`}</u>
                    </>
                  ) : (
                    <>
                      <span> </span>
                      <u
                        css={css`
                          font-size: 0.8rem;
                          color: rgb(140, 140, 140);
                          letter-spacing: -0.5px;
                          font-weight: 500;
                        `}
                        onClick={() => {
                          props.setInput(tag);
                        }}
                      >{`${tag}`}</u>
                    </>
                  )
                )}
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  gap: 1.5rem;
                  margin-top: 0.7rem;
                `}
              >
                {content.photos.map(
                  (photo, index) =>
                    index !== 0 && (
                      <img
                        css={css`
                          width: 12%;
                          border-radius: 10px;
                          aspect-ratio: 1/1;
                        `}
                        src={photo}
                      ></img>
                    )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contents;
