"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const proyectsCollection = 'proyects';
const proyectsSchema = new mongoose_1.default.Schema({
    project: String,
    github: String,
    url: String,
    utilities: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "skills"
        }],
    image: String
});
proyectsSchema.pre('findOne', function () {
    this.populate('proyects.utilities');
});
const proyectModel = mongoose_1.default.model(proyectsCollection, proyectsSchema);
exports.default = proyectModel;
