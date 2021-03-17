import defaultSettings from '@/settings';

const title = defaultSettings.title || 'Coding Tonight';

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
