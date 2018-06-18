module.exports = (ctx, cb) => {
  cb(null, {
    'cześć': ctx.query.who
  });
};
