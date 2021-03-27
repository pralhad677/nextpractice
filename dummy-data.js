const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Trekking at Tilicho',
      description:
        'the world highest altitude lake',
      location: 'manang',
      date: '2021-05-12',
      image: 'images/images.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Trekking at ABC',
      description:
        "One of the best spectacular view ",
      location: 'kaski,manang',
      date: '2021-05-30',
      image: 'images/1.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'EBC',
      description:
        'Trekking at world highest place',
      location: 'solukhumbu',
      date: '2022-04-10',
      image: 'images/download.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}