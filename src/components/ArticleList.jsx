import Article from "./Article";

// ArticleList
// Purpose: renders one Article for every post it receives.
// Parent: App    Children: Article
// Props: posts (array of { id, title, date, preview })
function ArticleList({ posts }) {
  // map() turns each post object into an <Article /> element.
  // React needs a unique key on each item in a list so it can track
  // which items change, so we use the post's id.
  const articles = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));

  return <main>{articles}</main>;
}

export default ArticleList;
