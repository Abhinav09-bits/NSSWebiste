const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-platinum-blue opacity-70"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">WE STAND TOGETHER</h1>
        <p className="text-xl md:text-2xl font-semibold">NOT ME BUT YOU</p>
      </div>
    </section>
  )
}

export default Hero

