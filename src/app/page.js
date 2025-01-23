export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
       <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul> 
    </div>
  );
}

