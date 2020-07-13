var moongoose = require("mongoose");

var professorSchema = new moongoose.Schema(
    {
        id:
        {
            type:String,
            unique:true,  
        },
        name:
        {
            type: String,
            required: true,
            maxlength:50,
            trim: true
        },
        institute:
        {
            type: String,
            required: true,
            trim: true
        },
        level: 
        {
            // Proff, Asst, Associate
            type: String,
            required: true
        },
        department:
        {
            type: String,
            trim: true,
            required: true
        },
        subject:
        {
            type: String,
            trim:true,
            required: false
        },

        rating_one:
        {
            type: Number,
           
            default:0
        },
        rating_two:
        {
            type: Number,
            default:0
        },
        rating_three:
        {
            type: Number,
            default:0
        },
        rating_four:
        {
            type: Number,
            default:0
        },
        comments:
        {
            type: Array,
            default:[]
        }
        
    },
    {timestamps: true}
)


module.exports = moongoose.model("Professor", professorSchema);