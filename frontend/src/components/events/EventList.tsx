import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface EventListProps {
  events: CampusEvent[];
  emptyText?: string;
}

function EventList({
  events,
  emptyText = "Henüz etkinlik bulunmuyor.",
}: EventListProps) {
  if (events.length === 0) {
    return <p className="sonuc" style={{ fontStyle: "italic", margin: "1rem 0" }}>{emptyText}</p>;
  }

  return (
    <div className="etkinlik-listesi events">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}

export default EventList;