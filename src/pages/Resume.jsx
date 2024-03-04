import resumeImg from "../assets/images/developer career resume.jpg"

const Resume = () => {
  return (
    <div>
      <div className="flex justify-center mb-16">
        <h1 className="justify-self-center px-4 text-6xl font-bold text-red-500 font-sans">Resume</h1>
      </div>
      <section className="flex justify-center px-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1GeNKeU-8mAw47jG6ub4SFXloNgW9jq_VMJm3fXy0NwA/edit?usp=sharing"
        >
          <img src={resumeImg} alt="developer career resume" />
        </a>
      </section>
      <div className="flex justify-center">
        <section className="px-8 my-16 font-bold flex flex-wrap">
          <div>
            <h2 className="text-xl">Languages</h2>
            <ul className="p-4 text-md">
              <li>* HTML, CSS, JavaScript</li>
              <li>* C++</li>
              <li>* Python</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl">Frameworks</h2>
            <ul className="p-4 text-md">
              <li>* React</li>
              <li>* Express</li>
              <li>* Node.js</li>
              <li>* Webpack</li>
              <li>* AJAX</li>
              <li>* jQuery</li>
              <li>* Bootstrap</li>
              <li>* Tailwind CSS</li>
              <li>* Pico CSS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl">Production</h2>
            <ul className="p-4 text-md">
              <li>* Render</li>
              <li>* Heroku</li>
              <li>* Netlify</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume