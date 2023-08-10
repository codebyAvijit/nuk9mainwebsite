import React from "react";

const BlogPosts = () => {
  return (
    <section className="sectoion-100px our-blog">
      <div className="container">
        {/* Tittle */}
        <div className="tittle">
          <h4>latest from our blog</h4>
          <p>
            He's a demon on wheels. The mate was a mighty sailin' man the
            Skipper brave and sure. Five passengers set sail that day for a
            three hour tour a three hour tour the ship set ground on the shore
            of this uncharted
          </p>
        </div>

        {/* Blog Post */}
        <div className="row">
          {/* Post */}
          <div className="col-md-6">
            <div className="blog-in">
              {/* Post Image */}
              <div className="blog-up-sec">
                <img
                  className="img-responsive"
                  src="assets/images/blog-1.jpg"
                  alt=""
                />
                {/* Post Date */}
                <div className="date-post">
                  29 <span> AUG</span>{" "}
                  <img src="assets/images/icon-date-post.png" alt="" />
                </div>
              </div>

              {/* Post Detail */}
              <span>By admin / Agency</span>
              <a href="#." className="heading">
                Then one day he was shootin' at some food and up through the
                ground
              </a>
              <p>
                And we'll do it our way yes our way. Make all our dreams come
                true for me and you. Boy the way Glen Miller played. Songs that
                made the hit parade.
              </p>
            </div>
          </div>

          {/* Post */}
          <div className="col-md-6">
            <div className="blog-in">
              {/* Post Image */}
              <div className="blog-up-sec">
                <img
                  className="img-responsive"
                  src="assets/images/blog-2.jpg"
                  alt=""
                />
                {/* Post Date */}
                <div className="date-post">
                  29 <span> AUG</span>{" "}
                  <img src="assets/images/icon-date-post.png" alt="" />
                </div>
              </div>

              {/* Post Detail */}
              <span>By admin / Agency</span>
              <a href="#." className="heading">
                Then one day he was shootin' at some food and up through the
                ground
              </a>
              <p>
                And we'll do it our way yes our way. Make all our dreams come
                true for me and you. Boy the way Glen Miller played. Songs that
                made the hit parade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
