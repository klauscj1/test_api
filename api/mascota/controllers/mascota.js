"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByUserId(ctx) {
    const { id } = ctx.params;
    const entities = await strapi.services.mascota.find({
      usuario_id: id,
    });
    const mascotas = entities.map((entity) => {
      delete entity.usuario_id;
      return sanitizeEntity(entity, { model: strapi.models.mascota });
    });
    return {
      ok: true,
      mascotas,
    };
  },
};
