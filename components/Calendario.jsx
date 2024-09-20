import { AUTOMATIC_FONT_OPTIMIZATION_MANIFEST } from "next/dist/shared/lib/constants";

// CalendarComponent.js
const CalendarComponent = () => {
    return (
      <div>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FArgentina%2FBuenos_Aires&bgcolor=%23ffffff&showTz=0&showCalendars=0&showPrint=0&mode=WEEK&src=YmFyY2FsYWxhYkBnbWFpbC5jb20&color=%23F6BF26"
          style={{ border: '0', width: '100%', height: '500px', margin: '10px auto' }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    );
  };
  
  export default CalendarComponent;
  