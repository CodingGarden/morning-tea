const dateInfo = document.querySelector('#date-info');

const today = new Date();

const locale = navigator.language;

// Can use this for getting locale: https://github.com/wojtekmaj/get-user-locale
const dateFormatter = new Intl.DateTimeFormat(locale);

const relativeFormatter = new Intl.RelativeTimeFormat(locale, { style: 'long' });
const daysTillNewYearsDay = (new Date(2021, 0, 1) - today) / 1000 / 60 / 60 / 24;

dateInfo.innerHTML = `
<p>Detected locale: ${locale}</p>
<p><em>Today's date:</em> ${dateFormatter.format(today)}</p>
<p><em>Days till new years:</em> ${relativeFormatter.format(daysTillNewYearsDay, 'days')}</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">More info on Intl here</a></p>
`;
