import React from 'react';
import List from './List.jsx';

//stateless functional component

const App = (props) => (
  <div className='pageDynamicView'>
    <List movies={movies}/>
  </div>
);

// hardcoded movies data
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;