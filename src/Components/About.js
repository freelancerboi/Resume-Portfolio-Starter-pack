import React from "react";

const About = ({ data }) => {
  if (data) {
    var profilepic = "images/" + data.image;
    var bio = data.bio;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <h1>"Photography allows us to capture the the most <br />
            Beautiful, Inspiring and Amazing fleets of our lives <br />
            for forever"<h3>- Vineeth</h3></h1>

          <p>{bio}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
