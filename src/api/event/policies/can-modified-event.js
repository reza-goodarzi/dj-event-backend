module.exports = async (ctx, config, { strapi }) => {
  const { user } = ctx.state;

  const eventID = ctx.params.id;
  const currentEvent = await strapi
    .service("api::event.event")
    .findOne(eventID, { populate: "user" });

  // const isAdmin = user.role.name === "Administrator";
  const isCurrentUserCreatedEvent = user.id === currentEvent.user.id;

  console.log({ currentEvent, user, userId: user.id, eventID });
  console.log({ isCurrentUserCreatedEvent });

  if (isCurrentUserCreatedEvent) {
    // Go to next policy or will reach the controller's action.
    return true;
  }

  return false;
};
