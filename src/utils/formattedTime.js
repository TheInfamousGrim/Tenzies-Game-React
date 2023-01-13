export default function formattedTime(timeToFormat) {
    switch (true) {
        case Object.keys(timeToFormat).length === 0 &&
            timeToFormat.constructor === Object:
            return 'Not started yet';
        case timeToFormat.$d.minutes === 0:
            return `${timeToFormat.$d.seconds}s`;
        case timeToFormat.$d.hours === 0:
            return `${timeToFormat.$d.minutes}min : ${timeToFormat.$d.seconds}sec`;
        default:
            return 'Too slow my dude';
    }
}
