const About_Me = () => {
  return (
    <div>
      <div className="flex justify-center mb-16">
        <h1 className="px-4 text-6xl font-bold text-red-500 font-sans">Tyler Odo</h1>
      </div>
      <div className="mx-auto max-w-[70svw] rounded-lg bg-clip-padding bg-gradient-to-b from-sky-500 via-cyan-500 via-blue-500 to-amber-300">
        <section className="p-2 border-2 border-slate-400 rounded-lg">
          <h2 className="px-4 py-1 flex justify-center bg-slate-600 border-2 border border-blue-400 rounded-lg font-extrabold font-sans">Programmer | Web Developer | Content Creator | Marketer | Video / Photo Editor</h2>
          <p className="px-4 py-1 flex bg-slate-600 border-2 border-blue-400 rounded-lg font-sans">Junior web developer with education in front-end, back-end, and full-stack applications. Comfortable with SQL and NoSQL databases. Passion for training and fine tuning AI for web and app integration. Bachelor&apos;s degree in Marketing with focus in social media, SEO, and advertisement.</p>
        </section>
      </div>
    </div>
  )
}

export default About_Me