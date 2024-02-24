// import hooks
import React from 'react';

//import library
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({value, setValue}) {
    return <ReactQuill className={`text-2xl border-slate-300 w-full min-h-[300px] border-[1px] border-solid outline-none focus:border-[#0B60B0]`} theme="snow" value={value} onChange={setValue} />;
  }

export default Editor;