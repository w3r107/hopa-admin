import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const First = () => {
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io("http://localhost:8500");
    socketRef?.current?.emit("addUser", { msg: "123" });
  }, []);

  useEffect(() => {
    socketRef?.current?.on("added", (msg) => {
      console.log(msg);
    });
    socketRef?.current?.on("tapped", (msg) => {
      console.log(msg);
    });
    socketRef?.current?.on("hey", (msg) => {
      console.log(msg);
    });
  });

  return <div>First</div>;
};

export default First;
