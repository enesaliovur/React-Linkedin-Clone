import React from 'react'
import "../styles/Feed.css"
import CreateIcon from '@material-ui/icons/Create';
export const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text"/>
                        <button type="submit">Postala</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
