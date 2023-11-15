const router = require("express").Router({ mergeParams: true });
const db = require("../db");
const auth = require("../auth");

router.get("/templates", auth, async (req, res) => {
    try {
        const Exercise = await db.exerciseDb.model("ExerciseTemplate");
        const Muscle = await db.muscleGroupDb.model("Muscle");
        const User = await db.userDb.model("User");

        const user = await User.findOne({ _id: req.params.id });

        if (!user) return res.status(404).json({ message: `User id ${req.params.id} not found.` });

        if (user._id == req.user._id) {
            const data = await Exercise
                .find({ creatorId: req.params.id })
                .populate("muscle", "", Muscle);
            return res.status(200).json(data);
        }

        // post is being viewed by follower
        const followed = user.followers.find(id => id == req.user._id);
        if (req.params.id != req.user._id && !followed && user.visibility != "public") return res.status(404).json({ message: `User id ${req.params.id} not found.` });

        if (!req.query.name) {
            const data = await Exercise
                .find({ creatorId: req.params.id, access: "public" })
                .populate("muscle", "", Muscle);
            return res.status(200).json(data);
        }

        // search for matches on start of 'name'
        const queryEx = await Exercise.find(
            {
                creatorId: req.params.id,
                access: "public",
                name: {
                    $regex: `^${req.query.name.toLowerCase()}`,
                    $options: "i"
                }
            })
            .populate("muscle", "", Muscle);
        return res.status(200).json(queryEx);
    }
    catch (err) {
        if (err.name === "CastError") return res.status(400).json({ message: "Invalid user id." });
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error." });
    }
});

router.get("/logs", auth, async (req, res) => {
    try {
        const Exercise = await db.exerciseDb.model("ExerciseLog");
        const Muscle = await db.muscleGroupDb.model("Muscle");
        const User = await db.userDb.model("User");

        const user = await User.findOne({ _id: req.params.id });

        if (!user) return res.status(404).json({ message: `User id ${req.params.id} not found.` });

        // post is being viewed by follower
        const followed = user.followers.find(id => id == req.user._id);
        if (req.params.id != req.user._id && !followed && user.visibility != "public") return res.status(404).json({ message: `User id ${req.params.id} not found.` });

        if (!req.query.name) {
            const data = await Exercise
                .find({ creatorId: req.params.id, access: "public" })
                .populate("muscle", "", Muscle);
            return res.status(200).json(data);
        }

        // search for matches on start of 'name'
        const queryEx = await Exercise.find(
            {
                creatorId: req.params.id,
                access: "public",
                name: {
                    $regex: `^${req.query.name.toLowerCase()}`,
                    $options: "i"
                }
            })
            .populate("muscle", "", Muscle);
        return res.status(200).json(queryEx);
    }
    catch (err) {
        if (err.name === "CastError") return res.status(400).json({ message: "Invalid user id." });
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error." });
    }
});

module.exports = router;