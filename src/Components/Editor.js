import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({errors}) {
    const [value, setValue] = useState('');
  
    return <ReactQuill  className={`${errors ? "border-red-500" : "border-slate-400"} w-full min-h-[300px] border-[1px] border-solid outline-none focus:border-[#0B60B0]`} theme="snow" value={value} onChange={setValue} />;
  }

export default Editor;