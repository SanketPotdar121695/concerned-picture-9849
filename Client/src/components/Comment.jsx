import React, { useState } from "react";




// let comments = [{
//   "heloo",
//   "etc"
// }]
const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(true);




  const handleCommentChange =(event)=> {
    setNewComment(event.target.value)
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments((prevComments) => [...prevComments,
      { id: Date.now(),text:newComment },
    ]);
    setNewComment("");
  };

  
  const handleCommentEdit = (commentId, newText) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id ==commentId ? { ...comment, text: newText } : comment
      )
    );
  };

  const handleCommentDelete = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  return (
    <div className="comment-section" style={{border:"2px solid",backgroundColor:"blue"}}>
      {/* <h2>Comment Section</h2> */}

      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write your comment..."
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>

      <div style={{border:"4px solid red"}} className="toggle-comments" onClick={toggleComments}>
        {showComments ? (
          // ---------------------------------------------------------------------------    ICONS LATER
          <i className="arrow-icon up">arrow up </i>
        ) : (
          <i className="arrow-icon down">arrow down</i>
        )}
      </div>

      {showComments && (
        <div className="comment-list">
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-buttons">
                <button
                  className="edit-button"
                  onClick={() => handleCommentEdit(comment.id, "Thik for the logic")}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleCommentDelete(comment.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
