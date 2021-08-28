const multer = require("multer");

exports.UploadFiles = (imageFile, audioFile, videoFile) => {
  // init multer disktorage
  // determine(menentukan) storage location files uploded
  // determine(menentukan) file name

  // const fileName = "";

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads"); // storage location files upload
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
    },
  });

  // function untuk filter file berdasarkan type
  const fileFilter = function (req, file, cb) {
    if (file.fieldname === imageFile) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = "Only image files are allowed!";
        return cb(new Error("Only image files are allowed!"), false);
      }
    }

    if (file.fieldname === audioFile) {
      if (!file.originalname.match(/\.(mp3|MP3|mpeg|MPEG)$/)) {
        req.fileValidationError = "Only audio files are allowed!";
        return cb(new Error("Only audio files are allowed!"), false);
      }
    }

    if (file.fieldname === videoFile) {
      if (!file.originalname.match(/\.(mp4|mkv)$/)) {
        req.fileValidationError = "Only video files are allowed!";
        return cb(new Error("Only video files are allowed!"), false);
      }
    }

    cb(null, true);
  };

  const sizeInMB = 100;
  const maxSize = sizeInMB * 1000 * 100; // Maximum file size in MB

  // exekusi upload multer & menentukan disk storage, validation & maxfile size
  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxSize,
    },
  }).fields([
    {
      name: imageFile,
      maxCount: 1,
    },
    {
      name: audioFile,
      maxCount: 1,
    },
    {
      name: videoFile,
      maxCount: 1,
    },
  ]); // untuk menentukan jumlah file

  return (req, res, next) => {
    upload(req, res, function (err) {
      // message error if validate failed
      if (req.fileValidationError) {
        return res.status(400).send({
          status: "Upload Failed!",
          message: req.fileValidationError,
        });
      }

      // message if file uploaded is empty
      if (!req.files && !err) {
        return res.status(400).send({
          status: "Upload Failed!",
          message: "Please select file to upload!",
        });
      }

      if (err) {
        // jika size melebihi batas
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).send({
            status: "Upload Failed!",
            message: "Max file sized 100MB",
          });
        }
        return res.status(400).send(err);
      }

      // jika semua pengecekan dan aman, maka lanjut ke controller
      // akses file yang di upload melalui req.files
      return next();
    });
  };
};
