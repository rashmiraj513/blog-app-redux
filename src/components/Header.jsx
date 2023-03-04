import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Navbar = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <header className='header'>
      <div id='logo'>
        <p>Blog Post</p>
      </div>
      <nav className='nav'>
        <form
          className='searchForm'
          onClick={(e) => e.preventDefault()}
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor='search'>Search Posts</label>
          <input
            type='text'
            id='search'
            placeholder='Search Posts'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <ul>
          <li id='firstChild'>
            <Link to='/'>Home</Link>
          </li>
          <li id='lastChild'>
            <Link to='/new'>New </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
