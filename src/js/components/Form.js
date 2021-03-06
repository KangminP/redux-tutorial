import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { addArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

function ConnectedForm(props) {
    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        const { value } = e.target
        setTitle(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuid();
        props.addArticle({ title, id })
        setTitle('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleChange}
                />
                </div>
                <button type="submit">
                    SAVE
                </button>
            </form>
        </>
    )
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;  