import React from "react"
import List from "./js/components/List"
import Form from "./js/components/Form"

import store from "./js/store/index"
import { addArticle } from "./js/actions/index"
window.store = store
window.addArticle = addArticle

function App() {
  return (
    <>
      <div>
        <h2>Articles</h2>
        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </>
  );
}

export default App;
