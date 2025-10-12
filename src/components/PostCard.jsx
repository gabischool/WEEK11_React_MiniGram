export default function PostCard({ post, onToggleLike }) {
  const { username, avatar, image, caption, likes, likedByMe, time } = post;

  return (
    <article className="post-card">
      <div className="post-header">
        <div className="avatar-wrap">
          <span className="story-ring"></span>
          <img className="avatar" src={avatar} alt="" />
        </div>
        <div className="user-row">
          <span className="username">{username}</span>
          <span className="time">• {time}</span>
        </div>
      </div>

      <div className="post-media">
        <img src={image} alt="" />
      </div>

      <div className="post-actions">
        <button
          aria-label={likedByMe ? "Unlike" : "Like"}
          className={`heart ${likedByMe ? "active" : ""}`}
          onClick={onToggleLike}
        >
          {likedByMe ? "♥" : "♡"}
        </button>
      </div>

      <div className="post-meta"><strong>{likes} likes</strong></div>

      <div className="post-caption">
        <span className="caption-user">{username}</span>{caption}
      </div>
    </article>
  );
}
