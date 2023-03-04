import { useEffect, useContext, useState } from 'react';
import Post from './Post';
import DataContext from '../context/DataContext';
import { fetchPosts, STATUS } from '../store/postSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const [searchResult, setSearchResult] = useState([]);

  const { search } = useContext(DataContext);

  useEffect(() => {
    const filteredPosts = data.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredPosts.reverse());
  }, [search, data, setSearchResult]);

  if (status === STATUS.LOADING) {
    return <p className='emptyMsg'>Loading...</p>;
  }

  if (status === STATUS.ERROR) {
    return <p className='emptyMsg error'>Something bad happened!</p>;
  }

  if (searchResult.length === 0) {
    return <p className='emptyMsg'>No posts to show!</p>;
  }

  return (
    <section className='home'>
      {searchResult.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Home;
