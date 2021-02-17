import './App.css';
import { useFetch } from "react-async"

const Person = ()=>{
  const {data,error} = useFetch(`http://127.0.0.1:8080/ping`, {
    headers:{accept:"application/json"}
  })
  if (error) return error.message
  if (data) {
    return(
    <div class="items">
    {data.map(item=>{
      console.log(item)
      return (
        <div class="item">
          <p class="appName">&lt;{item.app}&gt;</p>
          <p class="storeName">{item.name}</p>
          <p class="discount">{item.discount}원 할인</p>
          <p class="content">{item.content}</p>
        </div>
      )
    })}
    </div>
    )
  }
  return null
}

function App() {
  return (
    <div>
      <Person />
      <form action="http://127.0.0.1:8080/user" method="POST">
        <input type="text" name="name" placeholder="업체"></input>
        <input type="text" name="app" placeholder="앱"></input>
        <input type="number" name="discount" placeholder="할인금액"></input>
        <input type="content" name="content" placeholder="자세한 내용"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}


export default App;