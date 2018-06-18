module.exports = (ctx, cb) => {
  cb(null, {
    'witaj': ctx.query.who
  });
};
