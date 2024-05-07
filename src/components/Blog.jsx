//Haradcoded data
function BlogPost({ title, date, content }) {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <div className="prose">{content}</div>
      </div>
    );
  }
  
  function Blog() {
    const blogPosts = [
      {
        title: "My Journey with React",
        date: "May 5, 2024",
        content:
          "Here's an article about my experiences learning React...",
      },
      {
        title: "Building a Portfolio Website",
        date: "May 4, 2024",
        content:
          "This is a post about the process of creating a portfolio website...",
      },
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Blog</h2>
        {blogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    );
  }
  
  export default Blog;