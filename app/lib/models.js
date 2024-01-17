import mongoose from "mongoose"

const userSChema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
        unique:true,
    },

    img:{
        type:String,
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    isActive:{
        type:Boolean,
        default:true,
    },

    phone:{
        type:String,
    },

    address:{
        type:String,
    },
},
{timestamp: true}
);

const clientsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
      },
      clientid: {
        type: Number,
        required: true,
        min: 0,
      },
      phone: {
        type: Number,
        required: true,
        min: 0,
      },
      location: {
        type: String,
      },
    },
    { timestamps: true }
  );

  export const User = mongoose.models.User || mongoose.model("User", userSChema);
export const Clients =
  mongoose.models.Clients || mongoose.model("Clients", clientsSchema);