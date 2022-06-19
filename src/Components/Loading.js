import React from 'react'
import { css } from "@emotion/react";
import {ClipLoader, PacmanLoader, PuffLoader} from "react-spinners";

const override = css`
  display: block;
  margin: auto;
  margin-bottom: 20px;
  color: red;
`;
const Loading = () => {
  return <PacmanLoader css={override} size={25} color="#59C7D9" />;
}

export default Loading