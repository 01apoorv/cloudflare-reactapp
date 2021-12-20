import { Router } from "@reach/router";

import Posts from './components/posts'
import Like from './components/like'
import Dislike from './components/dislike'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <Like path="/like/:id" />
      <Dislike path="/dislike/:id" />
    </Router>
  );
}

export default App;
