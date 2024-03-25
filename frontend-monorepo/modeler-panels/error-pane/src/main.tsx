import { configure } from "mobx";
import { createRoot } from "react-dom/client";
import { IconExample } from "@repo/ui";

configure({ enforceActions: "never" });

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(<>Hoi<IconExample text="Hey" /></>);
