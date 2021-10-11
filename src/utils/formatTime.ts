import { format } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date: string) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date: string) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}
