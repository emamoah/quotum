import classnames from 'classnames';

export { version as APP_VERSION } from '../../package.json';
export { default as APP_DATA } from '../../data.json';

export function cx(...args: classnames.ArgumentArray) {
  return classnames(args);
}

export function sanitizeCurrency(rawValue: string) {
  const sanitized = rawValue.match(/^(0?\.\d*|[1-9]\d*(\.\d*)?)/)?.[0] || '';
  return sanitized.startsWith('.') ? '0.' : sanitized;
}

export function sanitizeInt(rawValue: string) {
  return rawValue.match(/^[1-9]\d*/)?.[0] || '';
}

export function getISODate(date: Date) {
  const ISODateTime = date.toISOString();
  return ISODateTime.slice(0, ISODateTime.indexOf('T'));
}
