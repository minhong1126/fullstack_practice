// 성공 시의 응답
const successResponse = (res, status, message, data = null) => {
  return res
    .status(status)
    .json({ success: true, message: message, data: data });
};

// 실패 시의 응답
const errorResponse = (res, statusCode, message, error = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};

module.exports = { successResponse, errorResponse };
