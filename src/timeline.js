import React from "react";
import "./Timeline.css"; 

const Timeline = () => {
  const events = [
    {
      title: "INDUSTRIAL VISIT",
      description:
        "The industrial visit organized by the Society of Biotechnologists to Sudha Dairy, Ranchi was full of valuable insights into the dairy production process and sampling of fresh dairy products.",
      image: "industrial-visit.jpg",
    },
    {
      title: "INTERNATIONAL CONFERENCE",
      description:
        "The Department of Bioengineering and Biotechnology, BIT Mesra, in association with Society of Biotechnologists (BIOTS), is thrilled to invite you to our International Conference on 'Emerging Trends in Translational Bioinformatics' (ET2B), happening from December 5th to 7th, 2024, at our picturesque campus in Ranchi, India.",
      image: "conference.jpg",
    },
    {
      title: "WEBINAR SESSION",
      description:
        "The session with Mr. Rahul Thakur was packed with insights and understanding. His guidance and mentorship were truly invaluable for all the students.",
      image: "webinar-session.jpg",
    },
  ];

  return (
    <div className="timeline-container">
      <h1>2024</h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <img src={event.image} alt={event.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
