import { ModelsInterface } from './ModelsInterface';

export interface BaseModelInterface {
  // atributo opcional, serve para criar metodos de instancias
  prototype?;
  associate?(models: ModelsInterface): void;
}
