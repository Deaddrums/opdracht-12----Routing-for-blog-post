import './DateFormatter.css'

function DateFormatter(dateOld) {
    const date = new Date(dateOld)

    return date.toLocaleDateString("nl-NL", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

}

export default DateFormatter