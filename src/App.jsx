
function App() {
  const todos=[
    "faire mes devoirs",
    "laver le linge",
    "preparer le repas"
  ]
  return <>



  <ul>
    {todos.map(todo=>(<li key={todo}>{todo}</li>))}
  </ul>
    

  </>
}

export default App
