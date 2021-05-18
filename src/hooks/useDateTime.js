const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
const updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

const localeObject = {
    relativeTime: {
      future: 'trong %s',
      past: '%s trước',
      s: 'vài giây',
      m: 'một phút',
      mm: '%d phút',
      h: 'một giờ',
      hh: '%d giờ',
      d: 'một ngày',
      dd: '%d ngày',
      M: 'một tháng',
      MM: '%d tháng',
      y: 'một năm',
      yy: '%d năm'
    }
};

dayjs.updateLocale('en', localeObject);

export const useDateTime = (sourceObject) => {
    return {
        timeAgo: dayjs(sourceObject.created_at).fromNow(),
    }
}