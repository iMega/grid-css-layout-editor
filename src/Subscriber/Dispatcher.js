import { Dispatcher } from "flux";

let dispatcher;
if (typeof window === "undefined") {
    dispatcher = new Dispatcher();
} else {
    if (!window.__FDISPATCHER__) {
        window.__FDISPATCHER__ = new Dispatcher();
    }
    dispatcher = window.__FDISPATCHER__;
}

export default dispatcher;
