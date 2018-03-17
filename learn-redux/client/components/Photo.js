import React from "react";
import { Link } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Photo = props => {
  const { post, index, comments } = props;

  const postUrl = `/view/${post.code}`;

  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={postUrl}>
          <img
            src={post.display_src}
            alt={post.caption}
            className="grid-photo"
          />
        </Link>

        <TransitionGroup>
          <CSSTransition
            classNames="like"
            key={post.likes}
            timeout={{ enter: 500, exit: 500 }}
          >
            <span className="likes-heart">{post.likes}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <figcaption>
        <p>{post.caption}</p>
        <div className="control-buttons">
          <button
            onClick={props.incrementLikes.bind(null, index)}
            className="likes"
          >
            &hearts; {post.likes}
          </button>
          <Link className="button" to={postUrl}>
            <span className="comment-count">
              <span className="speech-bubble" />
              {comments[post.code] ? comments[post.code].length : 0}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
