/** @format */
import { CLEANIcon } from "./CLEAN/CLEANIcon";

import CLEANBasic from "./CLEAN/CLEANBasic.js";
import { CLEANBasicInputs } from "./CLEAN/CLEANBasicInputs";
import CLEANComplex from "./CLEAN/CLEANComplex.js";
import { CLEANButtons } from "./CLEAN/CLEANButtons";
import {CLEANLayouts} from "./CLEAN/CLEANLayouts"
import {CLEANInputs} from "./CLEAN/CLEANInputs"
import {useInput} from "./functions/useInput"
import {CLEANForms} from "./CLEAN/CLEANForms"

//====================================Functions
//==============================================

const basic = CLEANBasic;
const buttons = CLEANButtons;
const layouts = CLEANLayouts;
const complex = CLEANComplex;
const icons = CLEANIcon;
const inputs = CLEANInputs;
const basicInputs = CLEANBasicInputs;
const forms = CLEANForms

function Global() {
  console.log("Global");
  import("./style.scss");
  import("./_null.scss");
  import("./KFGlobal.scss");
  import("./CLEANGlobal.scss");
}

export { inputs, basic,forms, complex, buttons, layouts, Global, icons, basicInputs, useInput };
