import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Box, Typography, useTheme, List, ListItem, ListItemText } from "@mui/material";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import { useState } from "react";

function Calender() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please Enter a New Title for Your Event");
    const calendarApi = selected.view.calendar;

    calendarApi.unselect();

    if (title)
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
        title,
      });
  };

  const handleEventClick = (selected) => {
    if (window.confirm("Are You Sure You Want to Delete the Event ?")) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDER" subtitle="Full Calender Interative Page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          p="15px"
          borderRadius="4px"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box
          flex="1 1 100%"
          ml="15px"
          // borderRadius="4px"
          // sx={{ backgroundColor: colors.primary[400] }}
        >
          <FullCalendar
            height="100vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "Call Mahdi", date: "2022-11-16" },
              { id: "4334", title: "Call Ashkan", date: "2022-11-18" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Calender;
