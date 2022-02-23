import React from "react";
import { PersonProps } from '../components/Types/Person.type'

//cách 1: nhận vào props with data small
// type PersonProps = {
//   name: {
//     firstName: string;
//     lastName: string;
//   };
// };
//cách 2: import file type.tsx định dạng typeProps
// type PersonProps = {
//   name: Name
// }

//cách 2: tạo ra 1 file type.tsx rồi import vào 
const Preson = ({ name }: PersonProps) => {
  return (
    <div>
      hello {name.firstName} {name.lastName}
    </div>
  );
};

export default Preson;
