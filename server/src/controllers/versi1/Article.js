// import joi
const joi = require("joi");

// import models
const { Article } = require("../../../models");

// Function GetArticles
exports.getArticles = async (req, res) => {
  try {
    const getDatas = await Article.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (getDatas == null) {
      return res.send({
        response: "Response Failed",
        status: "Data is empty!",
      });
    }

    res.send({
      response: "Response Success",
      status: "Get data Success.",
      dataCount: getDatas.length,
      data: getDatas,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetArticles

//  Function GetArticleById
exports.getArticleById = async (req, res) => {
  try {
    const { idParam } = req.params;

    const getData = await Article.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (getData == null) {
      return res.send({
        response: "Response Failed",
        status: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }

    res.send({
      response: "Response Success",
      status: "Get data Success.",
      idParam: idParam,
      data: getData,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetArticleById

// Function AddArticle
exports.addArticle = async (req, res) => {
  try {
    const dataAdd = req.body; //Data will Added

    // ChekcValidationInput
    const schema = joi.object({
      title: joi.string().min(1).required(),
      creatorName: joi.string().min(1).required(),
      creatorDate: joi.string().min(2).required(),
    });
    const { error } = schema.validate(dataAdd);
    if (error) {
      return res.send({
        status: "Response Failed",
        message: error.details[0].message,
        data: dataAdd,
      });
    }
    // EndChekcValidationInput

    // AddData
    const dataAdded = await Article.create(dataAdd);
    if (!dataAdded) {
      return res.send({
        status: "Response Failed",
        message: `Add data Failed!`,
      });
    }
    // EndAddData

    // GetArtistById
    const idData = dataAdded.id;
    const getData = await Article.findOne({
      where: {
        id: idData,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (getData == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idData} Not Found!`,
        data: null,
      });
    }
    // EndGetArtistById

    res.send({
      status: "Response Success",
      message: "Add data Success.",
      dataAdded: getData,
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Add Data Error!",
      error: error,
    });
  }
};
// End Function AddArticle

// Function UpdateArticle
exports.updateArtilce = async (req, res) => {
  try {
    const { idParam } = req.params;

    // CheckDataById
    const getDataById = await Article.findOne({
      where: {
        id: idParam,
      },
    });
    if (getDataById == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndCheckDataById

    // UpdateData
    const dataUpdate = req.body; //Data will updated
    const dataUpdated = await Article.update(dataUpdate, {
      where: {
        id: idParam,
      },
    });
    if (!dataUpdated) {
      return res.send({
        status: "Response Failed",
        message: `Update Data Failed!`,
        data: null,
      });
    }
    // EndUpdateData

    // getDataAfterUpdateById
    const getDataAfterUpdateById = await Article.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    // getDataAfterUpdateById

    if (getDataAfterUpdateById == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndgetUserAfterUpdateById

    res.send({
      status: "Response Success",
      message: "Update data Success.",
      idParam: idParam,
      dataUpdated: getDataAfterUpdateById,
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Update Error!",
      error: error,
    });
  }
};
// End Function UpdateArticle

// Function DeleteArticle
exports.deleteArticle = async (req, res) => {
  try {
    const { idParam } = req.params;

    // CheckDataById
    const getDataById = await Article.findOne({
      where: {
        id: idParam,
      },
    });
    if (getDataById == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndCheckDataById

    // DeleteData
    const deleteData = await Article.destroy({
      where: {
        id: idParam,
      },
    });
    if (!deleteData) {
      return res.send({
        status: "Response Failed",
        message: `Delete data Failed!`,
        data: null,
      });
    }
    // EndDelete

    res.send({
      status: "Response Success",
      message: "Delete data Success.",
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Delete Error!",
      error: error,
    });
  }
};
// End Function DeleteArticle

// Function Template
exports.templateFunction = async (req, res) => {
  try {
    res.send({
      status: "Response Success",
      message: "Success.",
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Error!",
      error: error,
    });
  }
};
// End Function Template
