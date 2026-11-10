// About
// Purpose: sidebar with the blog logo and a short description.
// Parent: App    Children: none
// Props: image (string, image URL), about (string, blog description)
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      {/* alt text keeps the image accessible to screen readers */}
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
