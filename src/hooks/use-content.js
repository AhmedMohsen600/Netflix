import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
export default function useContent(target) {
  const [content, setcontent] = useState(
    JSON.parse(localStorage.getItem("allContent"))
  );
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        localStorage.setItem("allContent", JSON.stringify(allContent));
        setcontent(allContent);
        // console.log(content);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [target]);
  return { [target]: content };
}

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2021, 9, 7);
//     }
//   }
// }
