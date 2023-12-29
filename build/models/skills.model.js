"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const skillsCollection = "skills";
const skillsSchema = new mongoose_1.default.Schema({
    language: String,
    image: String
});
const skillsModel = mongoose_1.default.model(skillsCollection, skillsSchema);
exports.default = skillsModel;
