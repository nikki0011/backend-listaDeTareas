import mongoose from "mongoose";

const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.info('conexion a mongoose ok')
  } catch (error) {
    console.error(error)
  }
};

conexionDB ()
