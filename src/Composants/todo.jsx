function Todo (){
    const todos = ["a", "b", "c"]
    return <ul>{
       todos.map(todo =>(<li key={todo}>{todo}</li>) )
    }
    </ul>
}
export default Todo;