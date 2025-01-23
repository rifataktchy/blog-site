export default async function BlogDetails({ params }) {
    const { id } = params;
  
    // Fetch blog details from the mock API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
  
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </main>
    );
  }
  