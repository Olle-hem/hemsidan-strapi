'use strict';

/**
 * cards service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cards.cards');
