window.initializeCalendar = (events) => {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        headerToolbar: {
            right: 'prev,next today',
            center: 'title',
            left: 'dayGridMonth'
        },
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            list: 'Lista'
        },
        events: events,
        height: 'auto',
        contentHeight: 'auto',
        aspectRatio: 1.5,
        dayMaxEvents: true,
        eventDidMount: function(info) {
            info.el.setAttribute("title", info.event.title);
        }
    });
    calendar.render();
};
