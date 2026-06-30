import { body, param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Tarea from "../models/tarea.js";

 export const reglasTarea = [
  body("nombreTarea")
    .isString()
    .withMessage("El dato debe ser un string")
    .isLength({ min: 5, max: 100 })
    .withMessage("El nombre Tarea debe contener entre 1 y 100 caracteres")
    .custom(async (valor, { req }) => {
      const tareaBuscada = await Tarea.findOne({ nombreTarea: valor });
      //pregunto sino existe el servicio buscado
      if (!tareaBuscada) {
        return true;
      }
      //verificacar si estamos editando
      if(req.params?.id && tareaBuscada._id.toString() === req.params.id){
        return true
      }
      // si ya existe el nombre del servicio buscadooo retorno error
      throw new Error('El nombre de la tarea ingresada ya exite, dato no valido ingrese un nombre distinto al ingresado')
    })
    ,
  body("estado")
    .isString()
    .withMessage("El dato  del estado debe ser un string")
    .isIn(["Ok", "Pendiente"])
    .withMessage(
      "La categoria debe ser algunos de los siguientes valores: 'Ok', 'Pendiente','Consultoria'"
    ),
];

// para validar en post y put
export const validacionTarea=[...reglasTarea.map((regla)=> regla.notEmpty().withMessage('Este campo es obligaotio')), resultadoValidacion]

export const validacionTareaPatch = [...reglasTarea.map((regla) => regla.optional({values:'falsy'})), resultadoValidacion]

export const validacionIDTarea = [
  param("id")
    .isMongoId()
    .withMessage(
      "El ID no conrresponde con el formato correcto de un ID de MongoDB"
    ),
  resultadoValidacion,
];


