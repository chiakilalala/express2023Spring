


const successHandler = (res, data) => {
  // ¹w³]¦^200
  res.json({
    status: 'success',
    data: data,
  });
};

module.exports = successHandler;