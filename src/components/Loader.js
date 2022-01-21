import { useState } from "react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  margin: 0 auto;
  color: "#000000";
  border-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
`;

const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#2472FA");
  return (
    <>
      <div className="sweet-loading">
        <SyncLoader color={color} loading={loading} css={override} size={15} />
      </div>
    </>
  );
};

export default Loader;
