// Article
// Purpose: renders a single blog post summary.
// Parent: ArticleList    Children: none
// Props: title (string), date (string, defaults to "January 1, 1970"),
//        preview (string), minutes (number, optional)
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let readTime = null;

  // Only show the read time if a minutes value was passed in.
  if (minutes) {
    // Under 30 minutes: one coffee cup per 5 minutes, rounded up.
    // 30 minutes or more: one bento box per 10 minutes, rounded up.
    const emoji =
      minutes < 30
        ? "☕️".repeat(Math.ceil(minutes / 5))
        : "🍱".repeat(Math.ceil(minutes / 10));
    readTime = ` • ${emoji} ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {readTime}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;