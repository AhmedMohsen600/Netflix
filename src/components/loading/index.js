import React from "react";
import { Spinner, ReleaseBody, LockBody, Picture } from "./styles/loading";
export default function Loading({ src, ...resProps }) {
  return (
    <Spinner {...resProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.RealeaseBody = function LoadingRealeaseBody() {
  return <ReleaseBody />;
};
