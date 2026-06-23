import Tarea from "../models/tarea.js";

export const prueba = (req, res) => {
  res.json("prueba de ruta, de nuevo");
};

export const crearTarea = async(req, res) => {
  try {
    // console.log(req.body);
    const tareaNueva = new Tarea(req.body)
    // aaca guardo en la BD
    await tareaNueva.save()
    // const tareaNueva
    res.status(201).json({mensaje:'La tarea fue creada correctamente'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al crear la tarea" });
  }
};

export const listaTarea = async(req, res) => {
  try {
  const arrayTareas = await Tarea.find();
  res.status(200).json(arrayTareas)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al listar las tareas" });
  }
};


export const obtenerTareaPorID = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
    console.log(tareaBuscada)
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro una tarea con ese ID" });
    }
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al buscar una tarea por ID" });
  }
};
