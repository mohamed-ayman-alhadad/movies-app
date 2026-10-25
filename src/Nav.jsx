import { useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");

  const onSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="container d-flex flex-wrap align-items-center gap-4 py-4">
      <h1 className="text-white m-0 me-auto">Anonime</h1>
      <NavLink to="/" end className={({ isActive }) =>
        `fs-4 text-decoration-none ${isActive ? "text-white" : "text-color"}`}>
        Home
      </NavLink>
      <form onSubmit={onSubmit} className="flex-grow-1" style={{ maxWidth: 380 }}>
        <input
          className="form-control p-2 ps-3 border-0 rounded-pill input-bg-color text-color"
          type="search"
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </nav>
  );
};
export default Nav;