import axios from "axios";
import { useEffect, useState, useMemo} from "react";

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        // console.log(data)
      });
  }, [])

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log('THIS WAS COMPUTED')

    return longestName;
  }

  const getLongestName = useMemo(() => findLongestName(data), [data])
  return (
    <>
      <h2>Memo Tutorial</h2>
      <div>
        <div>{getLongestName}</div>
        <button
          onClick={() => { setToggle(!toggle) }}
        >
          Toggle
        </button>
        {toggle && <h1> toggle </h1>}
      </div>
    </>
  )
}

export default MemoTutorial
