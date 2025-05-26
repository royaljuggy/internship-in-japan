import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogEntryPage() {
  const { monthFolder, entryFile } = useParams();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const filePath = `/entries/${monthFolder}/${entryFile}.md`;
        const res = await fetch(filePath);
        const text = await res.text();
        setContent(text);
      } catch (err) {
        setContent('# 404 - Blog Entry Not Found');
      }
    };

    fetchMarkdown();
  }, [monthFolder, entryFile]);

  console.log(content)

  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default BlogEntryPage;
