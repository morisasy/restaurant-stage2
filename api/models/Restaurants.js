/**
 * Restaurants.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
/**
 *  
name: "Mission Chinese Food",
neighborhood: "Manhattan",
photograph: "1",
address: "171 E Broadway, New York, NY 10002",
latlng: {},
cuisine_type: "Asian",
operating_hours: {
Monday: "5:30 pm - 11:00 pm",
Tuesday: "5:30 pm - 11:00 pm",
Wednesday: "5:30 pm - 11:00 pm",
Thursday: "5:30 pm - 11:00 pm",
Friday: "5:30 pm - 11:00 pm",
Saturday: "12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",
Sunday: "12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm",
},
reviews: [],
createdAt: "2017-07-25T02:26:54.985Z",
updatedAt: "2017-07-25T02:26:54.985Z",
id: 1
 */
module.exports = {

attributes: {
          name: { 
            type: 'string', 
            required: true 
          },
          neighborhood: { 
            type: 'string', 
            required: true 
          },
          photograph:{ 
            type: 'string', 
            required: true 
          },
          address:{ 
            type: 'string', 
            unique: true,            
            required: true 
          },
          // relationship one to one
          latlng: {
            model: 'LatLng'
          },
          cuisine_type:{ 
            type: 'string', 
            required: true 
          },
          // relationship
          operating_hours: {
          model: 'OperatingHours'
          },

          // relationship  one to many
          reviews:{
            collection: 'review',
            via: 'reviews'
          },
        
          id: { 
            type: 'number', 
            required: true 
          }

  }
};

