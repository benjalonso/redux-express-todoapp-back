const app = require("./expressConfig.js");
const sequelize = require("./database/database");
const {PORT} = require('./config.js')

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(6953, () => {
            console.log(`Server is running on port ${6953}`);
        });
    } catch (error) {
        console.log("Unable to connect", error);

    }
}

main()