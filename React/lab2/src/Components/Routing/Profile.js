let Profile = () => {
  return (
    <aside class="profile-card">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdVtwNKsq8mdNcsanjqptRrv6d5q7eazrng&usqp=CAU"
          alt=".."
        />

        <h3>Mariam Saad</h3>

        <h2>Software Engineer</h2>
      </header>

      <div class="profile-bio">
        <p>
          Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive
          Layouts, Web Standards Compliance, Backend development and database.
        </p>
      </div>

      <ul class="profile-social-links">
        <li>
          <a href="/">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"
              alt=".."
            />
          </a>
        </li>

        <li>
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              alt=".."
            />
          </a>
        </li>

        <li>
          <a href="/">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"
              alt=".."
            />
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default Profile;
