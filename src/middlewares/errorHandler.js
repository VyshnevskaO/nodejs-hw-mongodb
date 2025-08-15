export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
  return;
};
//  Second Option?(not according to TechTask, but from lection material)
// import { HttpError } from 'http-errors';

// export const errorHandler = (err, req, res, next) => {
//   if (err instanceof HttpError) {
//     res.status(err.status).json({
//       status: err.status,
//       message: err.name,
//       data: err.message,
//     });
//     return;
//   }
//   res.status(500).json({
//     status: 500,
//     message: 'Something went wrong',
//     data: err,
//   });
// };
