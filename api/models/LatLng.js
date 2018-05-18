/**
 * Reviw.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// Reviews belong to the Restaurants
module.exports = {

    attributes: {

          lat: { 
            type: 'number', 
            required: true 
          },
          lng: { 
            type: 'number', 
            required: true 
          }
        
    }
  };
    