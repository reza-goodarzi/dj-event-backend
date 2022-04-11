"use strict";
const { sanitize } = require("@strapi/utils");
/**
 *  event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  // Get Logged in users
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, {
        message: "No authorization header was found",
      });
    }

    const data = await strapi.service("api::event.event").find({
      ...ctx.query,
      filters: {
        user: {
          id: {
            $eq: user.id,
          },
        },
      },
    });

    if (!data) {
      return ctx.notFound();
    }

    const sanitizedEntity = await sanitize.contentAPI.output(data);
    return this.transformResponse(sanitizedEntity.results, {
      pagination: sanitizedEntity.pagination,
    });
  },
}));
