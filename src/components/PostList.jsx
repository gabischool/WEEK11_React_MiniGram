import PostCard from "./PostCard";

export default function PostList({ posts, onToggleLike }) {
  if (!posts?.length) return <p style={{ padding: 12 }}>No posts yet.</p>;
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onToggleLike={() => onToggleLike(post.id)} />
      ))}
    </section>
  );
}
