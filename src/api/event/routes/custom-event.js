"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/me",
      handler: "event.me",
    },
    {
      method: "PUT",
      path: "/events/:id",
      handler: "event.update",
      config: {
        policies: ["can-modified-event"],
      },
    },
    {
      method: "DELETE",
      path: "/events/:id",
      handler: "event.delete",
      config: {
        policies: ["can-modified-event"],
      },
    },
    {
      method: "POST",
      path: "/events",
      handler: "event.create",
      config: {
        policies: ["add-user-to-event"],
      },
    },
  ],
};
