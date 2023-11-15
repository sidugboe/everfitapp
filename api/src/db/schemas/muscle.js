const mongoose = require("mongoose");

const Muscles = [
    { muscle: "Gluteus maximus", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Biceps femoris", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "Semitendinosus", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "Semimembranosus", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "Rectus femoris", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "Sartorius", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "Tensor fascia latae", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Iliopsoas", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Pectineus", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Gluteus medius and minimus", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Piriformis", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Adductor magnus", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Adductor longus", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Adductor gracilis", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "Adductor brevis", muscleGroup: "63cc790d9425503a5dc4a18e" },
    { muscle: "vastus lateralis", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "vastus medialis", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "vastus intermedius", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "gastrocnemius", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "popliteus", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "Triceps surae", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "soleus", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "tibialis posterior", muscleGroup: "63cc790d9425503a5dc4a190" },
    { muscle: "tibialis anterior", muscleGroup: "63cc790d9425503a5dc4a190" },
    // { muscle: "flexor digitorum longus"  },
    // { muscle: "flexor hallucis longus"  },
    { muscle: "peroneus longus and brevis", muscleGroup: "63cc790d9425503a5dc4a190" },
    // { muscle: "extensor hallucis longus" },
    // { muscle: "extensor digitorum longus" },
    { muscle: "Scalenes", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "Sternocleidomastoid", muscleGroup: "63cc790d9425503a5dc4a192" },
    // { muscle: "Intercostals" },
    // { muscle: "Diaphragm" },
    { muscle: "Rectus Abdominis", muscleGroup: "63cc790d9425503a5dc4a18c" },
    { muscle: "External Oblique", muscleGroup: "63cc790d9425503a5dc4a18c" },
    // { muscle: "Internal Oblique" },
    // { muscle: "Transversus Abdominus" },
    // { muscle: "spinalis" },
    // { muscle: "longissimus" },
    { muscle: "iliocostalis", muscleGroup: "63cc790d9425503a5dc4a188" },
    { muscle: "Splenius Capitis et cervicis", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "Semispinalis", muscleGroup: "Semispinalis" },
    // { muscle: "Multifidus",  },
    // { muscle: "Rotatores" },
    { muscle: "Quadratus Lumborum", muscleGroup: "63cc790d9425503a5dc4a188" },
    { muscle: "Serratus anterior", muscleGroup: "63cc790d9425503a5dc4a18c" },
    { muscle: "Trapezius", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "Rhomboideus major and minor", muscleGroup: "63cc790d9425503a5dc4a188" },
    { muscle: "Levator scapulae", muscleGroup: "63cc790d9425503a5dc4a188" },
    { muscle: "Deltoid", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "supraspinatus", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "infraspinatus", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "teres minor", muscleGroup: "63cc790d9425503a5dc4a188" },
    { muscle: "Teres major", muscleGroup: "63cc790d9425503a5dc4a188" },
    // { muscle: "subscapularis", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "Coracobrachialis", muscleGroup: "63cc790d9425503a5dc4a192" },
    { muscle: "Biceps brachii", muscleGroup: "63cc790d9425503a5dc4a186" },
    { muscle: "Triceps brachii", muscleGroup: "63cc790d9425503a5dc4a186" },
    { muscle: "Latissimus dorsi", muscleGroup: "63cc790d9425503a5dc4a188" },
    { muscle: "Pectoralis major", muscleGroup: "63cc790d9425503a5dc4a18a" },
    { muscle: "Pectoralis minor", muscleGroup: "63cc790d9425503a5dc4a18a" },
    { muscle: "brachialis", muscleGroup: "63cc790d9425503a5dc4a186" },
    { muscle: "brachioradialis", muscleGroup: "63cc790d9425503a5dc4a186" },
    { muscle: "pronator teres", muscleGroup: "63cc790d9425503a5dc4a186" },
    // { muscle: "anconeus" },
    { muscle: "supinator", muscleGroup: "63cc790d9425503a5dc4a186" },
    // { muscle: "abductor pollicis longus" },
    // { muscle: "extensor pollicis brevis" },
    // { muscle: "extensor indicis proprius" },
    // { muscle: "pronator quadratus" },
    { muscle: "flexor carpi radialis", muscleGroup: "63cc790d9425503a5dc4a186" },
    { muscle: "extensor carpi radialis longus", muscleGroup: "63cc790d9425503a5dc4a186" }
];

const MuscleSchema = new mongoose.Schema({
    muscle: {
        type: String,
        required: true,
        lowercase: true,
        unique: [true, "Muscle already exists"]
    },
    muscleGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MuscleGroup",
        required: true
    }
});

module.exports = {
    Muscles,
    MuscleSchema
};