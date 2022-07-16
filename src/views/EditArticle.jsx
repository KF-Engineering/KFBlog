import axios from 'axios'
import React, {useState} from 'react'
import {buttons} from '../styles/themeHandler'

function EditArticle() {
    const [state, setstate] = useState(
        {
            title : '',
            author: '',
            tags: [],
            article : []
        }
    )

    const postFunc = () => {
    axios
      .post('window.apiUrlapi/Articles', state)
      .then(res => {
       setstate("succsessful") 
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
    }
  return (

    <>
    <buttons.Highlight onClick={() => postFunc()}> 
        post article
    </buttons.Highlight >
    </>
  )
}

export default EditArticle