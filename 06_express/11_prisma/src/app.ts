import Model from "./models/model.js";

const manage = async () => {
  await Model.delete4();
};

manage();
