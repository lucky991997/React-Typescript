import React from "react";

import { PersonListProps } from '../components/Types/Person.type'

//cách 1: nhận vào props with data small
// type PersonListProps  = {
//   list: {
//     firstName: string;
//     lastName: string;
//   }[];
// };
//Cách 2: import file type.tsx định dạng typeProps
// type PersonListProps = {
//   // list : Name[];
// }

const PersonList = ({ list }: PersonListProps ) => {
  return (
    <div>

       PersonList:  {list.length}
      {list.length > 0
        ? list.map((item, index) => (
            <h2 key={index}>
              {item.firstName} {item.lastName}
            </h2>
          ))
        : "Hi Guest"}
    </div>
  );
};

export default PersonList;
