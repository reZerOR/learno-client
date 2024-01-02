import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between">
        <div>
          <h2
            style={{}}
            className="text-4xl font-bold text-textPrime after:content-dot after:ml-1"
          >
            <span className="text-prime">Lear</span>no
          </h2>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex text-lg font-medium text-textPrime gap-10">
            <li>Home</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <div className="text-lg font-medium space-x-6 py-10">
            <button className="px-10 py-4 border-2 border-prime rounded-lg text-prime">
              Log in
            </button>
            <button className="px-10 py-4 bg-prime text-white rounded-lg border-2 border-prime">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
