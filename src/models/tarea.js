import mongoose, { Schema } from "mongoose";

const TareaSchema = new Schema(
  {
    nombreTarea: {
      type: String,
      require: true,
      unique: true,
      minLength: 1,
      maxLength: 100,
      trim: true,
    },
    categoria: {
      type: String,
      required: true,
      enum: ["Ok", "Pendiente"],
    },
  },
  {
    timestamps: true,
  },
);

const Tarea = mongoose.model("tarea", TareaSchema);

export default Tarea;
