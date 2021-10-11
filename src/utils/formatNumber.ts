import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fNumber(number: number) {
  return numeral(number).format();
}

export function fShortenNumber(number: number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}
