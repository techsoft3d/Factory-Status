var factory_uids = [
        "ad250b7d-5fe5-4501-99a2-23fbfb7bcadd", //factory
        "44529bbd-5a23-4d4e-be8c-301d419b9b25",//cmm assembly
        "00e21aa8-849e-42b6-9cee-d8486ffec1ff", //nsrobot5
        "8fe956a3-6b13-4a3a-940b-d726a76b741f",//pickuprobot1
        "8ecabe07-8a59-40cf-92d9-c5b5be22a482",//weldrobot1
]



export async function startViewer(model, container) {
        var viewer;
        let sessioninfo = await caasClient.getStreamingSession();
        await caasClient.enableStreamAccess(sessioninfo.sessionid, factory_uids);
        
        viewer = new Communicator.WebViewer({
                containerId: container,
                endpointUri: sessioninfo.endpointUri,
                model: model,
                boundingPreviewMode: "none",
                enginePath: "https://cdn.jsdelivr.net/gh/techsoft3d/hoops-web-viewer",
                rendererType: 0
        });


        return viewer;

}

async function fetchVersionNumber() {
        let data = await caasClient.getHCVersion();
        versionNumer = data;        
        return data
      }
      