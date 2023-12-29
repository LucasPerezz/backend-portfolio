import mongoose from "mongoose";

const proyectsCollection = 'proyects';

const proyectsSchema = new mongoose.Schema({
    project: String,
    github: String,
    url: String,
    utilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills"
    }],
    image: String
})

proyectsSchema.pre('findOne', function() {
    this.populate('proyects.utilities');
});

const proyectModel = mongoose.model(proyectsCollection, proyectsSchema);

export default proyectModel;