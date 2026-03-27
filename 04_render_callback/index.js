import data from "./data.js" with {type:"json"};
import { Manager } from "./manager.js";
import { ButtonElement, EmptyButtonElement } from "./view.js";

const manager = new Manager(data);
const buttonElement = new ButtonElement(manager);
const emptyButtonElement = new EmptyButtonElement(manager);