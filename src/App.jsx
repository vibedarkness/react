
function App() {
  const todos=[
    "faire mes devoirs",
    "laver le linge",
    "preparer le repas",
    "laver les moutons"
  ]
  return <>



  <ul>
    {todos.map(todo=>(<li key={todo}>{todo}</li>))}
  </ul>
    

  </>
}

export default App
