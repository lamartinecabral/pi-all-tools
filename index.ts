import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import {
  createBashTool,
  createEditTool,
  createFindTool,
  createGrepTool,
  createLsTool,
  createReadTool,
  createWriteTool,
} from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  const cwd = process.cwd();

  const defaultTools = {
    read: createReadTool(cwd),
    write: createWriteTool(cwd),
    edit: createEditTool(cwd),
    bash: createBashTool(cwd),
  };

  const extraTools = {
    ls: createLsTool(cwd),
    find: createFindTool(cwd),
    grep: createGrepTool(cwd),
  };

  pi.registerTool(defaultTools.read);
  pi.registerTool(defaultTools.write);
  pi.registerTool(defaultTools.edit);
  pi.registerTool(defaultTools.bash);
  pi.registerTool(extraTools.ls);
  pi.registerTool(extraTools.find);
  pi.registerTool(extraTools.grep);
}
