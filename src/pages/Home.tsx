import React from 'react';
import { Link } from 'react-router-dom';

// Since the blog entries are all created, hard-code
const blogEntries = [
  { month: 'August', day: 10 },
  { month: 'August', day: 13 },
  { month: 'August', day: 22 },
  { month: 'September', day: 12 },
  { month: 'September', day: 23 },
  { month: 'September', day: 24 },
  { month: 'October', day: 15 },
  { month: 'October', day: 21 },
  { month: 'November', day: 2 },
  { month: 'November', day: 22 },
  { month: 'December', day: 1 },
  { month: 'December', day: 11 },
  { month: 'December', day: 22 }
];

const Home = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <p>Select an entry:</p>
      {blogEntries.map(({ month, day }) => (
        <div key={`${month}-${day}`}>
          <Link to={`/blog/${month}/${day}`}>
            <button>{`${month} ${day}`}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
