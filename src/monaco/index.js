import * as monaco from 'monaco-editor'
import typescriptWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

function initMonaco() {

    self.MonacoEnvironment = {
        getWorker: function (_workerId, label) {
            return new typescriptWorker({ name: label })
        }
    }
    return monaco
}

export { initMonaco }
