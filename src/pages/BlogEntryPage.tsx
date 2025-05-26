import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBlogEntry } from '../get-blog-entry'

function BlogEntryPage() {
  const { month_name, day } = useParams();

  const blog_entry_text = getBlogEntry(`${month_name}-${day}`)

  return (
    <div className="markdown-body">
      <ReactMarkdown>{blog_entry_text}</ReactMarkdown>
    </div>
  );
}

export default BlogEntryPage;
