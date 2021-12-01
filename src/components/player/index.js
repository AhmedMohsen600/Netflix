import React, { useState, useContext, createContext } from "react";
import ReactDom from "react-dom";
import { LockBody } from "../loading/styles/loading";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...resProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...resProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...resProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  const handelClick = (e) => {
    const element = e.target.classList;
    if (element.contains("over")) setShowPlayer(false);
  };
  return showPlayer
    ? ReactDom.createPortal(
        <Overlay className="over" {...resProps} onClick={handelClick}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close onClick={() => setShowPlayer(false)}>
              <img src="/images/icons/close.png" alt="Close" />
            </Close>
            <LockBody />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ children, ...resProps }) {
  const { setShowPlayer } = useContext(PlayerContext);
  return (
    <Button
      {...resProps}
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
    >
      {children}
    </Button>
  );
};
