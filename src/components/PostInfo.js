import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'

const PostInfo = (props) => {
    const [posts, setPosts] = useState([])
    const [ likes, setLikes ] = useState(0)
    const [ comments, setComments ] = useState(0)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const result = response.data
                setPosts(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            {posts.map((ele) => {
                return (
                    <div key={ele.id}>
                        <h2>{ele.title}</h2>
                        <p>{ele.body}</p>
                        <a>
                            <FontAwesomeIcon icon={faThumbsUp} /> {likes}
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faComment} /> {comments}
                        </a>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostInfo