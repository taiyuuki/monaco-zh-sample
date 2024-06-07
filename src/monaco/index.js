import * as monaco from 'monaco-editor'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

function initMonaco() {

    self.MonacoEnvironment = {
        getWorker: function (_workerId, label) {
            return new htmlWorker({ name: label })
        }
    }
    return monaco
}

export { initMonaco }
