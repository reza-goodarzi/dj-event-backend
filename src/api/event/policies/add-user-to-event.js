module.exports = async (ctx, config, { strapi }) => {
  const { user } = ctx.state;
  const { data } = ctx.request.body;
  data.user = user.id;
};
