import React from 'react';
import { Link } from 'react-router-dom';

// Since the blog entries are all created, hard-code
const blogEntries = [
  { monthFolder: '08-august', entryFile: 'august-10' },
  { monthFolder: '08-august', entryFile: 'august-13' },
  { monthFolder: '08-august', entryFile: 'august-22' },

  { monthFolder: '09-september', entryFile: 'september-12' },
  { monthFolder: '09-september', entryFile: 'september-23' },
  { monthFolder: '09-september', entryFile: 'september-24' },

  { monthFolder: '10-october', entryFile: 'october-15' },
  { monthFolder: '10-october', entryFile: 'october-21' },

  { monthFolder: '11-november', entryFile: 'november-2' },
  { monthFolder: '11-november', entryFile: 'november-22' },

  { monthFolder: '12-december', entryFile: 'december-1' },
  { monthFolder: '12-december', entryFile: 'december-11' },
  { monthFolder: '12-december', entryFile: 'december-22' },
];

const Home = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <p>Select an entry:</p>
      {blogEntries.map(({ monthFolder, entryFile }) => (
        <div key={`${monthFolder}-${entryFile}`}>
          <Link to={`/blog/${monthFolder}/${entryFile}`}>
            <button>{`${entryFile.replace(/-/g, ' ').toUpperCase()}`}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
