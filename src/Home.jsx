import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const Home = () => {
  return (
    <div>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </div>
  );
};

export default Home;
