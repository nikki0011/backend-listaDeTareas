import { body, param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

 export const validacionTarea = [
  body("nombreTarea")
    .notEmpty()
    .withMessage("El nombre de es un dato obligatorio")
    .isString()
    .withMessage('El dato debe ser un string')
    .isLength({min:1, max:100})
    .withMessage('El nombre servicio debe contener entre 1 y 100 caracteres')
    ,
    body("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isString()
    .withMessage('El dato  de la categoria debe ser un string')
    .isIn(['Ok', 'Pendiente'])
    .withMessage("La categoria debe ser algunos de los siguientes valores: 'Ok', 'Pendiente'")
    ,
    resultadoValidacion
];

export const validacionIDTarea = [
  param('id').isMongoId().withMessage('El ID no conrresponde con el formato correcto de un ID de MongoDB')
  ,
  resultadoValidacion
]


