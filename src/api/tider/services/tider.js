'use strict';

/**
 * tider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tider.tider');
