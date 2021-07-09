import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const StoryIndexItem = (props) => {
  return(
    <>
      <Link to={`/stories/${props.story.id}`}>Story Show Page</Link>
      <Link to={`/stories/${props.story.id}/edit`}>Edit</Link>
      <button onClick={() => props.removeStory(props.story.id)}></button>

    </>
  )
}

export default StoryIndexItem
