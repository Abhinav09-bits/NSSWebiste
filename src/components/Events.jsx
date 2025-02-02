const EventCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

const Events = () => {
  const events = [
    {
      title: "Tree Plantation Drive",
      description: "We organized a massive tree plantation drive to promote environmental sustainability.",
      image: "/event-tree-plantation.jpg",
    },
    {
      title: "Blood Donation Camp",
      description: "Our annual blood donation camp saw a record number of donors this year.",
      image: "/event-blood-donation.jpg",
    },
    {
      title: "Rural Education Program",
      description: "We conducted educational workshops in nearby villages to promote literacy.",
      image: "/event-rural-education.jpg",
    },
  ]

  return (
    <section id="events" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-platinum-blue">Our Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events

