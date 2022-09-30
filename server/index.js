const express = require("express");
const sportRouter = require("./routes/routes");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use("/", sportRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
