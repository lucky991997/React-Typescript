import React from "react";

interface GreetProps { // khai báo 2 kiểu dữ liệu cho children
  name: string;
  messageCount: number
  isActive: boolean;
}
const Greet = ({ name, isActive, messageCount }: GreetProps) => {
    const styles  = {
        color: 'blue',

    }
  return (
    <div style={styles} >
      {isActive ? `Hello Welcome To : ${name}` : `Hello welcome to guest ${messageCount}`}
    </div>
  );
};

export default Greet;
