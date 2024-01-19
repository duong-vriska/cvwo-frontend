import React from 'react'
import "./Posts.css"
import { CreateComment } from '../Creator/createComment'
import { Comments } from './singleComments'

export const ViewComment = () => {
    return (
    <div className = "comment-wrapper">
        <CreateComment></CreateComment>
        <Comments></Comments>
    </div>
    )
}