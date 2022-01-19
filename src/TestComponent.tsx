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
  
  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
    </div>
  )
}

export default TestComponent
