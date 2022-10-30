const Channel = require("./Channel");

class DirectoryChannel extends Channel {
    constructor(data, client) {
        super(data, client);

        this.guild = client.guilds.get(data.guild_id) || {
            id: data.guild_id
        };

        this.update(data);
    }

    update(data) {
        if(data.type !== undefined) {
            this.type = data.type;
        }
        if(data.name !== undefined) {
            this.name = data.name;
        }
    }
}

module.exports = DirectoryChannel;