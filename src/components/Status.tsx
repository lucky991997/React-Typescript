import React, { useState, ChangeEvent, ReactNode } from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};
const Status = ({ status }: StatusProps) => {

    let messageProps
  let [message, setMessage] = useState('success')
  
  if (status === "success") {
    messageProps ="successfully";
  } else if (status === "loading") {
    messageProps  ="loading...";
  } else {
    messageProps="error";
  }
  const btnStatus = [
      {
          id: 1,
          value: 'loading',
      },
      {
        id: 2,
        value: 'success',
    },
    {
        id: 3,
        value: 'error',
    },
  ]
  const handleStatus = (statusValue:string) => {
    if (statusValue === "success") {
        setMessage("successfully");
      } else if (statusValue === "loading") {
        setMessage  ("loading...");
      } else {
        setMessage("error");
      }
  }
  return (
    <>
    {
        btnStatus.map((status,index) => (
            <button onClick ={() => {handleStatus(status.value)}} style={{padding: 10, marginRight: 10}} key={status.id}>{status.value}</button>
        ))
    }
      {/* <div>Status - {messageProps} </div> */}
      <div>Status Click - {message}</div>
    </>
  );
};

export default Status;
