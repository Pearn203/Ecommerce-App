const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//tạo một kết nối cơ sở dữ liệu -> Tôi cũng có thể
//tạo một tệp riêng cho việc này và sau đó import/sử dụng tệp đó tại đây

mongoose
  .connect("mongodb+srv://kog151603:Ankn151603@cluster0.dfj3m.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now runing on ${PORT}`));
