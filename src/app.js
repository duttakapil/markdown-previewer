import React from 'react';
import {hot} from 'react-hot-loader';
import marked from 'marked';
import './style.css';

function Editor({onChange, value, id}) {
  return (
    <textarea name="text" id={id} autocomplete="on" placeholder="Write your markdown here" spellcheck onChange={onChange} value={value}></textarea>
  )
}

function Preview({text, id}) {    
  return (
    <div id={id} dangerouslySetInnerHTML={{__html: marked(text, {breaks: true})}}></div>
  )
}

function Markdown() {
  const [text, setText] = React.useState(defaultMD);

  handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="markdown">
      <Editor id="editor" onChange={handleChange} value={text}/>
      <Preview id="preview" text={text}/>
    </div>
  )
}

let defaultMD = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

export default hot(module)(Markdown);