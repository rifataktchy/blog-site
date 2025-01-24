export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <div>
  <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {posts.slice(0, 10).map((post) => (
      <div
        key={post.id}
        className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
      >
        <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
          <h2 className="text-lg font-semibold">{post.title}</h2>
        </a>
        <p className="text-sm text-gray-600 mt-2">
          Click to read more about this blog post.
        </p>
      </div>
    ))}
  </div>
</div>

  );
}

