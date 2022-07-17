import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  createIncompreteList(inputText);
};

// 未完了リストに追加する関数
const createIncompreteList = (inputText) => {
  const li = document.createElement("li");
  li.className = "list-row";
  const div = document.createElement("div");
  div.innerText = inputText;
  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 親要素（list-row）取得
    const parentList = completeButton.parentNode;
    // 自分自身を削除
    document.getElementById("incompleted-list").removeChild(parentList);
    // textを取得
    const moveText = parentList.querySelector("div").innerText;
    // li作成
    const addLi = document.createElement("li");
    addLi.className = "list-row";
    // div作成
    const div = document.createElement("div");
    div.innerText = moveText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 戻すボタンイベント追加
    backButton.addEventListener("click", () => {
      // 親要素（list-row）取得
      const parentList = backButton.parentNode;
      // 自分自身を削除
      document.getElementById("complete-list").removeChild(parentList);

      const text = parentList.firstElementChild.innerText;
      createIncompreteList(text);
    });

    // 完了リストに追加
    const targetList = document.getElementById("complete-list");
    addLi.appendChild(div);
    addLi.appendChild(backButton);
    targetList.appendChild(addLi);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incompleted-list").removeChild(deleteTarget);
  });

  // 要素の追加
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  document.getElementById("incompleted-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
