const Resume = () => {
  return (
    <div>
      <div className="flex justify-center mb-16">
        <h1 className="justify-self-center px-4 text-6xl font-bold text-red-500 font-sans">Resume</h1>
      </div>
      <section className="flex justify-center px-4">
        <img src="src/assets/images/developer career resume.jpg" alt="developer career resume" />
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