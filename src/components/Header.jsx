// Header
// Purpose: displays the blog's name at the top of the page.
// Parent: App    Children: none
// Props: name (string) - the blog title, passed down from App
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
