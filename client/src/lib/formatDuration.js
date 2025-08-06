export function formatDuration(duration = 35.5) {
    if (duration < 1) {
        return '-';
    }

    duration = Math.floor(duration);
    const m = duration % 60;
    const h = (duration - m) / 60;
    let text = '';

    if (h === 1) {
        text += h + ' hour';
    } if (h > 1) {
        text += h + ' hours';
    }

    if (h > 0 && m > 0) {
        text += ' ';
    }

    if (m === 1) {
        text += m + ' minute';
    } if (m > 1) {
        text += m + ' minutes';
    }

    return text;
}

