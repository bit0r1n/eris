const Collection = require("../util/Collection");
const GuildChannel = require("./GuildChannel");
const ThreadChannel = require("./ThreadChannel");

class ForumChannel extends GuildChannel {
    constructor(data, client) {
        super(data, client);

        this.threads = new Collection(ThreadChannel);

        this.update(data);
    }

    update(data) {
        super.update(data);

        if (data.available_tags !== undefined) {
            this.availableTags = data.available_tags;
        } else {
            this.availableTags = [];
        }

        if (data.default_reaction_emoji !== undefined) {
            this.defaultReactionEmoji = data.default_reaction_emoji;
        } else {
            this.defaultReactionEmoji = null;
        }

        if (data.default_thread_rate_limit_per_user !== undefined) {
            this.defaultThreadRateLimitPerUser = data.default_thread_rate_limit_per_user;
        } else {
            this.defaultThreadRateLimitPerUser = null;
        }

        if (data.rate_limit_per_user !== undefined) {
            this.rateLimitPerUser = data.rate_limit_per_user;
        } else {
            this.rateLimitPerUser = null;
        }

        if (data.default_auto_archive_duration !== undefined) {
            this.defaultAutoArchiveDuration = data.default_auto_archive_duration;
        } else {
            this.defaultAutoArchiveDuration = null;
        }

        if (data.default_sort_order !== undefined) {
            this.defaultSortOrder = data.default_sort_order;
        } else {
            this.defaultSortOrder = null;
        }
    }

    createInvite(options, reason) {
        return this.client.createChannelInvite.call(this.client, this.id, options, reason);
    }

    getInvites() {
        return this.client.getChannelInvites.call(this.client, this.id);
    }
}

module.exports = ForumChannel;