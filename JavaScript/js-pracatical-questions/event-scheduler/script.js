const eventForm = document.getElementById("event-form");
const eventNameInput = document.getElementById("event-name");
const eventDateTimeInput = document.getElementById("event-datetime");
const eventList = document.getElementById("event-list");

eventForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const eventName = eventNameInput.value;
  const eventDateTime = new Date(eventDateTimeInput.value);
  const newEvent = { name: eventName, datetime: eventDateTime };

  addEventToList(newEvent);
  eventForm.reset();
});

function addEventToList(event) {
  const eventItem = document.createElement("li");
  eventItem.classList.add("event-item");
  eventItem.textContent = `${event.name} - ${event.datetime.toLocaleString()}`;
  eventList.appendChild(eventItem);

  // Sort events by date and time
  const events = Array.from(document.querySelectorAll(".event-item"));
  events.sort((a, b) => {
    const dateA = new Date(a.textContent.split(" - ")[1]);
    const dateB = new Date(b.textContent.split(" - ")[1]);
    return dateA - dateB;
  });

  // Rearrange event list
  eventList.innerHTML = "";
  events.forEach((event) => {
    eventList.appendChild(event);
  });
}
