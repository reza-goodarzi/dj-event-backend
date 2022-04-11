"use strict";
const slugify = require("slugify");
module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      console.log(data);
      if (data.name) {
        data.slug = slugify(data.name, { lower: true });
      }
    },
    async beforeUpdate(params, data) {
      console.log(data);

      if (data.name) {
        data.slug = slugify(data.name, { lower: true });
      }
    },
  },
};
