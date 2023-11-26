import 'module-alias';
import express, { Application, Request, Response } from 'express';
import 'colors';
import morgan from 'morgan';
import Controller from './common/utilities/interfaces/controller.interface';

class App {
  app: Application;
  constructor(controllers: Controller[]) {
    this.app = express();
    this.initControllers(controllers);
  }

  private initControllers(controllers: Controller[]): void {
    controllers.forEach(async (controller: Controller) => {
      this.app.use('/api/v1', controller.router);
    });
  }
}

export default App;
