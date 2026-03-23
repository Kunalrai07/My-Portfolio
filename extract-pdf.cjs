const { PdfReader } = require("pdfreader");

new PdfReader().parseFileItems("public/mycv.pdf", (err, item) => {
  if (err) console.error(err);
  else if (!item) console.log("Done.");
  else if (item.text) console.log(item.text);
});
