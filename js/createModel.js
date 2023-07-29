AFRAME.registerComponent("createmodels", {
  init: async function() {
    var models = await this.getModels();
    var barcodes = Object.keys(models);
    barcodes.map(barcode => {
      var model = models[barcode];
      this.createModel(model);
    });
  },
  getModels: function() {
    return fetch("js/models.json")
      .then(res => res.json())
      .then(data => data);
  },
  createModel: function(model) {
    var barcodeValue = model.barcode_value;
    var modelUrl = model.model_url;
    var modelName = model.model_name;

    var scene = document.querySelector("a-scene");

    var marker = document.createElement("a-marker");

    marker.setAttribute("id", `marker-${modelName}`);
    marker.setAttribute("type", "barcode");
    marker.setAttribute("model_name", modelName);
    marker.setAttribute("value", barcodeValue);
    marker.setAttribute("markerhandler", {});
    scene.appendChild(marker);

    if (barcodeValue === 0) {
      var modelEl = document.createElement("a-entity");
      modelEl.setAttribute("id", `${modelName}`);
      
      
      
      
      
    } else {
      var modelEl = document.createElement("a-entity");
      modelEl.setAttribute("id", `${modelName}`);
      
      
      
      
      
    }
  }
});
