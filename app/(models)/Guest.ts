import  { Schema, model, models } from "mongoose";


// mongoose.connect(process.env.MONGO as string);

// mongoose.Promise = global.Promise //ensures that Mongoose uses JavaScript’s built-in Promise implementation instead.;

const guest = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  hotel: Boolean,
  isComing: String,
  companionName: String,
  companionMenuType: String,
  menuType: String,
}, {
  timestamps: true
});

export const Guest = models.Guest || model('Guest', guest)