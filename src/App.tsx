// import styled from "@emotion/styled";

import styled from "styled-components";
import React, { useState } from "react";

function App() {
  const [userNm, setUserNM] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget);
    const { value } = event.currentTarget;
    // console.log(value, "벨류");
    // setUserNM("");
    setUserNM(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 이거 있으면 버튼 클릭해도 새로고침 안됨
    console.log(userNm, "클릭");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={onChange}
          // value={userNm}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;

// // import styled from "@emotion/styled";

// import styled from "styled-components";
// import React, { useState } from "react";

// function App() {
//   const [value, setValue] = useState("");

//   // 타입스크립트는 이 온첸이 함수가 InputElement에 의해 실행되는 것을 알수있다
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     // setValue(event.currentTarget.value); // 이렇게 써도 될텐데
//     const {
//       currentTarget: { value },
//     } = event;
//     setValue(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("gello", value);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={value}
//           type="text"
//           placeholder="username"
//         />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// }

// export default App;
