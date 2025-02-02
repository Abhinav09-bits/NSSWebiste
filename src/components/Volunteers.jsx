const VolunteerCard = ({ name, role, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg md:text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 text-sm md:text-base">{role}</p>
    </div>
  </div>
)

const Volunteers = () => {
  const volunteers = [
    { name: "John Doe", role: "President", image: "/volunteer1.jpg" },
    { name: "Jane Smith", role: "Secretary", image: "/volunteer2.jpg" },
    { name: "Mike Johnson", role: "Treasurer", image: "/volunteer3.jpg" },
    // Add more volunteers as needed
  ]

  return (
    <section id="volunteer" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-platinum-blue">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer, index) => (
            <VolunteerCard key={index} {...volunteer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Volunteers

