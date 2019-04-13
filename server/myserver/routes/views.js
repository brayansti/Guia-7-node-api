module.exports = (app) => {
    app.get("/" , (req, res) => {
        res.send("You are on / page");
    });
    app.get("/route" , (req, res) => {
        res.send("You are on /reute page");
    })
    app.get("*" , (req, res) => {
        res.send("Where am I?");
    })
}