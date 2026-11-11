import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import type { EventFormData } from "../types/campus-event";
import EventForm from "../components/forms/EventForm";

const emptyForm: EventFormData = {
  title: "",
  category: "",
  capacity: "",
  date: "",
  time: "",
  location: "",
  description: "",
  image: "",
};

export default function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="bolum-baslik">Yeni Etkinlik Ekle</h2>
      <EventForm
        initialData={emptyForm}
        submitText="Kaydet"
        onSubmit={(data) => {
          addEvent(data);
          navigate("/admin");
        }}
        onCancel={() => navigate("/admin")}
      />
    </section>
  );
}