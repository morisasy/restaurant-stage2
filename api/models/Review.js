/**
 * Reviw.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// Reviews belong to the Restaurants
module.exports = {

    attributes: {

          name:{ 
            type: 'string', 
            required: true 
          },
          date:{ 
            type: 'string', 
            required: true 
          },
          rating:{ 
            type: 'number', 
            required: true 
          },
          comments:{ 
            type: 'string', 
            required: true 
          },
          // a reference to the restaurants 
          reviews: {
            model: 'restaurants'
          }
        
    }
  };
    