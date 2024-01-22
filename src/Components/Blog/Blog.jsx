import React, { useEffect, useRef } from "react";
import blog1 from "../../Assets/blog1.jpeg";
import blog2 from "../../Assets/blog2.jpg";
import blog3 from "../../Assets/blog3.jpg";
import "./Blog.css";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Blog() {
  const blogbox2ref = useRef(null);
  const blogbox3ref = useRef(null);
  const blogbox4ref = useRef(null);
  const blog3imageref = useRef(null);
  const blogbox3descref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: blogbox4ref.current,
      },
    });
    const t2 = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: blogbox2ref.current,
      },
    });
    const t3 = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: blogbox3ref.current,
      },
    });

    t1.from(
      blogbox4ref.current,
      {
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut,
      },
      0.5
    ).to(
      blogbox4ref.current,
      {
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      },
      0.5
    );
    // animation for 2nd box.
    t2.from(
      blogbox2ref.current,
      {
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut,
      },
      0.7
    ).to(
      blogbox2ref.current,
      {
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      },
      0.7
    );
    t3.to(blogbox3ref.current, 1, { css: { visibility: "visible" } }, 0.8)
      .to(
        blog3imageref.current,
        1,
        {
          width: "100%",
          ease: Power2.easeInOut,
        },
        0.8
      )
      .to(blogbox3descref.current, 1, { css: { visibility: "visible" } }, 2);
  });
  return (
    <div className="blogcontainer">
      <div className="blogbox1">
        <div>
          Secrets of learning revealed in <span>blogs</span>
        </div>
      </div>
      <div ref={blogbox2ref} className="blogbox2">
        <img src={blog1} alt="blog2image"></img>
        <div>
          Online Education
          <br></br>
          <span>Become a better blogger with complete trainnig</span>
        </div>
      </div>

      <div ref={blogbox3ref} className="blogbox3">
        {" "}
        <div ref={blogbox3descref}>
          Teaching Methodology
          <br></br>
          <span>Insights of how to improve your teaching.</span>
        </div>{" "}
        <img ref={blog3imageref} src={blog2} alt="blog3image"></img>
      </div>

      <div ref={blogbox4ref} className="blogbox4">
        {" "}
        <img src={blog3} alt="blog4image"></img>
        <div>
          Online Education
          <br></br>
          <span>Become a better blogger with complete trainnig</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
