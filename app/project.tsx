export default function Project() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <div className="Mainn">
        <div className="projects-container">

          {/* Project 1 */}
          <div className="projects">
            <div className="png">
              <img src="one.jpg" alt="Project" />
            </div>

            <h1>Django Project</h1>

            <p className="uni">
              The Ramallah Parking Project is a smart parking management system
              designed to organize parking spaces and reduce traffic congestion.
            </p>

            {/* Tech Stack */}
            <div className="tech-stack">
              <span className="badge django">Django</span>
              <span className="badge react">React</span>
              <span className="badge mysql">MySQL</span>
            </div>

            {/* Buttons */}
            <div className="project-footer">
              <a
                href="https://github.com/mahmoudQutama1997/Park-Ramallah"
                target="_blank"
                className="btn source"
              >
                <i className="fa-brands fa-github"></i> Source
              </a>

              <a
                href="https://your-live-demo"
                target="_blank"
                className="btn live"
              >
                <i className="fa-solid fa-link"></i> Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="projects">
            <div className="png">
              <img src="two.jpg" alt="Project" />
            </div>

            <h1>Node & Express Project</h1>

            <p className="uni">
              Pusher Poll is a real-time voting application built using Node.js
              and Express with instant updates.
            </p>

            <div className="tech-stack">
              <span className="badge node">Node.js</span>
              <span className="badge express">Express</span>
              <span className="badge mongodb">MongoDB</span>
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/mahmoudQutama1997/pusherPoll"
                target="_blank"
                className="btn source"
              >
                <i className="fa-brands fa-github"></i> Source
              </a>

              <a
                href="https://pusherpoll.onrender.com/"
                target="_blank"
                className="btn live"
              >
                <i className="fa-solid fa-link"></i> Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="projects">
            <div className="png">
              <img src="three.jpg" alt="Project" />
            </div>

            <h1>Django Project</h1>

            <p className="uni">
              Doctor Booking System that allows patients to easily book
              appointments with doctors online.
            </p>

            <div className="tech-stack">
              <span className="badge django">Django</span>
              <span className="badge react">React</span>
              <span className="badge mysql">MySQL</span>
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/mahmoudQutama1997/Doctor-Booking-System"
                target="_blank"
                className="btn source"
              >
                <i className="fa-brands fa-github"></i> Source
              </a>

              <a
                href="https://your-live-demo"
                target="_blank"
                className="btn live"
              >
                <i className="fa-solid fa-link"></i> Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
