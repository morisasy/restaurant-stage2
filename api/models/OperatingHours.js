/**
 * OperatingHours.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// OperatingHours  belong to the Restaurants
module.exports = {

    attributes: {

        Monday: { 
            type: 'string', 
            required: true 
          },
        Tuesday: { 
            type: 'string', 
            required: true 
          },
        Wednesday: { 
            type: 'string', 
            required: true 
          },
        Thursday:{ 
            type: 'string', 
            required: true 
          },
        Friday: { 
            type: 'string', 
            required: true 
          },
        Saturday: { 
            type: 'string', 
            required: true 
          },
        Sunday: { 
            type: 'string', 
            required: true 
          }
    }
  };
    