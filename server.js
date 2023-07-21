// imported dependency
import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
//* imported routs
import tableRoute from "./Routes/createTableR.js";
import Register from "./Routes/RigesterR.js";
import emailCheck from "./Routes/getEmailR.js";
import loginRoute from "./Routes/LoginR.js";
import forPasswordChange from "./Routes/ForNewPassword.js";
import ForConfirmOTPR from "./Routes/ForConfirmOTPR.js";
import setNewPassWord from "./Routes/SetNewPassWord.js";
import userProfileUpdate from "./Routes/updateUserProfileR.js";
import DeleteRoute from "./Routes/DeleteR.js";
import notification from "./Routes/notificationR.js";
import forSingleNotfification from "./Routes/notificationR.js";
import getStudentInformation from "./Routes/getStudentInfoR.js";
import deleteNotification from "./Routes/notificationR.js";
import phdFileUploadR from "./Routes/phdFileUploadR.js";
import MtechFileUplaodR from "./Routes/MtechFileUploadR.js";
import BtechFileUplaodR from "./Routes/BtechFileUpladR.js";
import getAllEduDocR from "./Routes/getAllEducationalR.js";
import goodsFileUploadR from "./Routes/uploadGoodsR.js";
import goodsShowerR from "./Routes/getAllGoodsR.js";
import phdPdfDawnloader from "./Routes/phdPdfDawnloaderR.js";
import userProfile from "./Routes/getProfileR.js";
import getYourSingleGoods from "./Routes/uploadGoodsR.js";
import deleteGoods from "./Routes/uploadGoodsR.js";
import adminRouter from "./Routes/Admin.js";
import adminPhdDelete from "./Routes/adminDeleteR.js";
import updateNotificationA from "./Routes/adminUpdate.js";
import updateUserProfileAdmin from "./Routes/updateUserInfoByAdmin.js";
//* initializing express
let app = express();
// initializing dotenv
dotenv.config();
app.use(
  cors({
    origin: "https://ethiopiansatiitroorkee.com",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// * static for image
app.use(express.static("Resources/fileFromBtech/"));
app.use(express.static("Resources/fileFromMtech/"));
app.use(express.static("Resources/fileFromPhd/"));
app.use(express.static("Resources/goodsPicture/"));

app.use("/user", setNewPassWord);
app.use("/user", userProfile);
app.use("/admin", tableRoute);
app.use("/admin", emailCheck);
app.use("/admin", adminRouter);
app.use("/admin", adminPhdDelete);
app.use("/user", Register);
app.use("/user", loginRoute);
app.use("/user", forPasswordChange);
app.use("/user", ForConfirmOTPR);
app.use("/user", userProfileUpdate);
app.use("/user", DeleteRoute);
app.use("/user", notification);
app.use("/user", forSingleNotfification);
app.use("/user", getStudentInformation);
app.use("/user", deleteNotification);
app.use("/user", phdFileUploadR);
app.use("/user", MtechFileUplaodR);
app.use("/user", BtechFileUplaodR);
app.use("/user", getAllEduDocR);
app.use("/user", goodsFileUploadR);
app.use("/user", goodsShowerR);
app.use("/user", phdPdfDawnloader);
app.use("/user", deleteGoods);
app.use("/user", getYourSingleGoods);
app.use("/admin", updateNotificationA);
app.use("/admin", updateUserProfileAdmin);

//* connection info for database
let connectionInfo = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

let port = process.env.PORT || process.env.PORT2;
async function connectionHierarchy() {
  try {
    //* connection with database
    await connectionInfo.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully connected to database");
        //* server
        app.listen(port, () => {
          console.log(`server is listening to port ${port}`);
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}

//* initializing function
connectionHierarchy();

export default connectionInfo;
