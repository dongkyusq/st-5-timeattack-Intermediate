import { useState } from "react";
import { addBuy } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const [titleInput, setTitleInput] = useState("");
  const [detailInput, setDetailInput] = useState("");

  return (
    <form>
      <label>제목: </label>
      <input
        type="text"
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
      <label>내용: </label>
      <input
        type="text"
        value={detailInput}
        onChange={(e) => {
          setDetailInput(e.target.value);
        }}
      />
      <button onClick={() => {}}>추가</button>
    </form>
  );
}
