const { z } = require("zod");

const User = z.object({
    name: z.string().max(32).min(3),
    profileImage: z.string(),
    introduction: z.string(),
    profileLink: z.string().url(),
});

module.exports = User;
