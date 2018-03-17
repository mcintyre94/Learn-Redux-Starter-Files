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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form);

    const { postId } = props.params;
    const author = form.querySelector('input[name="author"]').value;
    const comment = form.querySelector('input[name="comment"]').value;
    props.addComment(postId, author, comment);
  };

  return (
    <div className="comments">
      {props.postComments.map(renderComment)}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" name="author" placeholder="author" />
        <input type="text" name="comment" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
