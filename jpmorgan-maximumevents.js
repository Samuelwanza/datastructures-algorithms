function maxEvents(start, end) {
    const events = [];
    const n = start.length;
  
    // Create an array of events with start and end times
    for (let i = 0; i < n; i++) {
      events.push({ start: start[i], end: end[i] });
    }
  
    // Sort the events by their end times in ascending order
    events.sort((a, b) => a.end - b.end);
  
    let count = 0; // Count of attended events
    let prevEnd = -1; // End time of the last attended event
  
    for (const event of events) {
      if (event.start >= prevEnd) {
        // If the event starts after or at the time of the previous event's end,
        // attend this event and update prevEnd
        count++;
        prevEnd = event.end;
      }
    }
  
    return count;
  }
  
  const start = [1, 1, 2];
  const end = [3, 2, 4];
  const maxAttendedEvents = maxEvents(start, end);
  console.log(`Maximum number of events that can be attended: ${maxAttendedEvents}`);
  