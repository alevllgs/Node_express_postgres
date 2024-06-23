import ERRORS from '../helpers/errors.js';

const findError = (code) => {
  const error = ERRORS.find((err) => err.code === code);
  return error ? error : { status: 500, message: 'Error en el servidor' };
};

export default findError;
