//this file defines what screen corresponds to each path (we get controllers, which get screen views)
// Import of screen & controllers
import { registerRoute } from './router.js';
import { MainController } from '../controllers/main_controller.js';


registerRoute('/main', MainController);