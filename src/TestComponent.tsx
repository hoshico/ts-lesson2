import React, { useState } from "react"

interface Props {
  text: string
}

// useStateにオブジェクトを使用したい場合はジェネリクスを使用する
interface UserData {
  id: number;
  name: string
}

const TestComponent: React.FC<Props> = (props) => {
  // 初期値を0に設定した場合はnumber型と推論してくれる
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({id: 1, name: "dummy"})
  const [inputData, setInputData] = useState("")
  
  // innputされた値(event.target)を引数として受け取る際
  // 引数の型を定義する必要がある
  // 下のonChangeをhoverすると引数の型を確認することができる
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value)
  }

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </div>
  )
}

export default TestComponent
