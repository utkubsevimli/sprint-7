import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="kart event-card">
      {event.image && (
        <img src={event.image} alt={event.title} className="event-image" />
      )}
      <div className="event-content">
        <span className="event-category">{event.category}</span>
        <h3>{event.title}</h3>
        <p className="event-desc">{event.description}</p>
        <div className="event-meta">
          <div>
          <span>📅 {formatDate(event.date)} {event.time}</span>
          </div>
          <div>
          <span>📍 {event.location}</span>
          </div>
          <div>
          <span>👥 Kontenjan: {event.capacity}</span>
          </div>
        </div>
        <Link to={`/events/${event.id}`} className="button">
  Detayları Gör
</Link>
      </div>
    </article>
  );
}

export default EventCard;