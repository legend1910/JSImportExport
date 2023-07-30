import "./styles.css";
import { apikey } from "./util"; // with let key word export you need to mention the same variable name and its caseSenstive
import apikeydefault from "./Default"; // unlike like let key word export here you can define any name
import * as multipleExport from "./multipleExport"; // you need define like this with as keyword as an object and then use the propeties for the multiple export
// as keyword can use to define alias for example mport { apikey as aliaskey} from "./util"";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox{apikey}</h1>
      <h1>Hello CodeSandbox{apikeydefault}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>This is multiple export</h1>
      <h3>This is multiple export {multipleExport.default}</h3>
      <h3>This is multiple export {multipleExport.apiKey}</h3>
      <h3>This is multiple export {multipleExport.demokey}</h3>
    </div>
  );
}
