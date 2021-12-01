import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
 html,body{
     font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    background-color: black;
 }
`;
// rules_version = '2';
//  service cloud.firestore {
//       match /databases/{database}/documents {
//         match /{document=**} {
//           allow read, get: if true;
//           allow write: if false;
//       }
//     }
// }
