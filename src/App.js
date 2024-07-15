import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { loadPosts } from './action';

function App() {
  const posts = useSelector((state) => state.posts)

  console.log(posts);
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <div className="App">
      <h1>Посты: </h1>
        {
          loading ? 'Loading...' : (
            posts.map((item) => {
              return (
                <p>{item.id} - <span>{item.title}</span></p>
              );
            })
          )
        }
    </div>
  );
}

export default App;
