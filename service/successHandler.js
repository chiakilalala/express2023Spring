


const successHandler = (res, data) => {
  // �w�]�^200
  res.json({
    status: 'success',
    data: data,
  });
};

module.exports = successHandler;