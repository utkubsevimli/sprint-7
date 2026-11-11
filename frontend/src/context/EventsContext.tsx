import { createContext, useContext, useState, type ReactNode } from "react";
import type { CampusEvent, EventFormData, Category } from "../types/campus-event";
import { events as initialEvents } from "../data/events";

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

// Form verisini CampusEvent tipine çeviren yardımcı fonksiyon
function toEvent(id: string, data: EventFormData): CampusEvent {
  return {
    id,
    title: data.title.trim(),
    category: data.category as Category,
    capacity: Number(data.capacity),
    date: data.date,
    time: data.time,
    location: data.location.trim(),
    description: data.description.trim(),
    image: data.image?.trim() ? data.image.trim() : undefined,
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  // 1. Yeni etkinlik ekleme: [...events, yeni]
  function addEvent(data: EventFormData) {
    const newEvent = toEvent(`event-${Date.now()}`, data);
    setEvents((prev) => [...prev, newEvent]);
  }

  // 2. Etkinlik güncelleme: map ile eşleşeni değiştir
  function updateEvent(id: string, data: EventFormData) {
    const updated = toEvent(id, data);
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? updated : e))
    );
  }

  // 3. Etkinlik silme: filter ile eşleşmeyenleri tut
  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EventsContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const value = useContext(EventsContext);
  if (value === null) {
    throw new Error("Provider yok: useEvents bir EventsProvider içinde kullanılmalıdır.");
  }
  return value;
}