const { app } = require("./app");

app.listen(process.env.PORT || 3003, () => {
  console.log(`Server listening on port ${process.env.PORT || 3003}`);
});
