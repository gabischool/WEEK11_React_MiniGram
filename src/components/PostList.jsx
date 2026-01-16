// Import the PostCard here
import PostCard from './PostCard';

export function PostList({ Posts, onLike }) {
  return (
    <div className="post-list">
      {/* Loop through the posts here and pass to the PostCard */}
      {Posts.map((post) => (
        <PostCard
          key={post.id}
          {...post}
          onLike={() => onLike(post.id)}
        />
      ))}
    </div>
  );
}
export default PostList;