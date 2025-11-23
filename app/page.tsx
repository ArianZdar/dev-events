import ExploreBtn from '@/components/ExploreBtn'
import EventCard from '@/components/EventCard'
import events from '@/lib/constants'

const page = () => {
  return (
    <section>
      <h1 className='text-center mt-5'>Welcome to DevEvents!</h1>
      <p className='text-center mt-5'>Hackathons, Meetups and Conferences for Developers</p>

      <ExploreBtn />

      <div className='mt-20 space-y-7 flex justify-center items-center flex-col '>
        <h3>Featured Events</h3>
        <ul className='events'>
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page