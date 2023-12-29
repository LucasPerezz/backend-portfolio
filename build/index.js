"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const skills_routes_1 = __importDefault(require("./routes/skills.routes"));
const projects_routes_1 = __importDefault(require("./routes/projects.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
//middlewares
app.use(express_1.default.json());
app.use('/api/skills', skills_routes_1.default);
app.use('/api/projects', projects_routes_1.default);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
//Conexion a la base de datos
const mongoURI = 'mongodb+srv://portfolio:portfolio@portfolio.kni0vs6.mongodb.net/test';
mongoose_1.default.connect(mongoURI);
