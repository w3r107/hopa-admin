import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const Test = () => {
  const socket = useRef(io("http://localhost:8500"));
  useEffect(() => {
    socket?.current?.emit("addUser", { msg: "123" });
  }, []);

  useEffect(() => {
    socket?.current?.on("added", (msg) => {
      console.log(msg);
    });
  });

  return <div>Test</div>;
};

export default Test;
