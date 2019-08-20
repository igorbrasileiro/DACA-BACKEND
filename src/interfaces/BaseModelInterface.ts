import { Model } from "sequelize";

export interface BaseModelInterface {
  // atributo opcional, serve para criar metodos de instancias
  prototype?;
  associate?(models: Model): void;
}
