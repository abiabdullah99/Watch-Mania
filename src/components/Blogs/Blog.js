import React from "react";
import "./Blogs.css";
const Blog = () => {
  return (
    <div className="questoion">
      <h1>
        What is <span>Semantic</span> Tag?
      </h1>
      <p>
        emantic tags clearly define the purpose of the HTML element. It also
        describes the type of content that the element should contain. For
        example,
        <span>header, footer, article are considered semantic elements</span> as
        they clearly describe their purpose and the type of content they should
        enclose. New HTML5 semantic tags to structure the document in a
        meaningful way are:
      </p>
      <hr />
      <h1>
        What's the difference between <span>inline</span> vs inline-
        <span>block?</span>
      </h1>
      <h1><span>Inline</span> Elements !!</h1>
      <h5>
        1. inline The element doesn’t start on a new line and only occupy just
        the width <span>it requires. You can’t</span> set the width or height.
      </h5>
      <h5>
        Here are a few elements that have a default inline property: span, a,
        img,are <span>also are inherently inlin</span>e: em, strong, i, small.
      </h5>
      <h1>Inline <span>Block !!</span></h1>
      <h5>
        1. It’s formatted just like the inline element, where it doesn’t start
        on a new line. <span>BUT, you can set width</span> and height values.
      </h5>
      <h5>
        2.It’s essentially the same thing as inline, except that you can set
        height and width values.
      </h5>
      <hr />
      <h1>What is <span>Context</span> Api?</h1>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. React.createContext() is all you need. It returns a consumer and
        a provider. <span>Provider is a component that</span> as it's names suggests provides
        the state to its children. It will hold the "store" and be the parent of
        all the components that might need that store. Consumer as it so happens
        is a component that consumes and uses the state.
      </p>
    </div>
  );
};

export default Blog;
