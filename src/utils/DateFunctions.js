export const getTime = (dt) => {
    let date = new Date(dt);
    return `${date.getHours()}:${date.getMinutes()} hrs`;
}

export const getDay = (dt) => {
    let date = new Date(dt);
    return date.getDate();
}

export const getMonth = (dt) => {
    let date = new Date(dt);
    return (date.getMonth() + 1);
}

export const getYear = (dt) => {
    let date = new Date(dt);
    return date.getFullYear();
}

export const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
