import React from "react";

const Comments = props => {
  const renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  };

  return (
    <div className="comments">
      {props.postComments.map(renderComment)}
      <form className="comment-form">
        <input type="text" placeholder="author" />
        <input type="text" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
