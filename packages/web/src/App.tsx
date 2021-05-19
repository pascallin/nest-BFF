import React from 'react';

import Header from "./features/header/Header"
import TodoList from "./features/todos/TodoList"
import Footer from "./features/footer/Footer"

function App(): JSX.Element {
  return (
    <div className="App">
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
