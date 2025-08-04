import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div
      className="post-card"
      style={{
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 12,
        margin: "24px auto",
        maxWidth: 400,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        overflow: "hidden"
      }}
    >
      {/* Top: Avatar and username */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 16px 8px 16px"
        }}
      >
        <div
          style={{
            background: "#f44336",
            color: "#fff",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 18,
            marginRight: 10
          }}
        >
          {username[0].toUpperCase()}
        </div>
        <span style={{ fontWeight: 500, fontSize: 15 }}>{username}</span>
      </div>
      {/* Image */}
      <img
        className="post-image"
        src={imageUrl}
        alt="Post"
        style={{
          width: "100%",
          objectFit: "cover",
          maxHeight: 300,
          borderRadius: "0"
        }}
      />
      {/* Like button and count */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 16px 0 16px"
        }}
      >
        <button
          className="like-button"
          onClick={onLike}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center"
          }}
          aria-label="Like"
        >
          <Heart color="black" size={20} />
        </button>
        <span style={{ fontSize: 14 }}>{likes} likes</span>
      </div>
      {/* Username and caption */}
      <div
        style={{
          padding: "8px 16px 16px 16px",
          fontSize: 14,
          wordBreak: "break-word"
        }}
      >
        <span style={{ fontWeight: 500 }}>{username}</span>
        <span> {caption}</span>
      </div>
    </div>
  );
}

export default PostCard;

