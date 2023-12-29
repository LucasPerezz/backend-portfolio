"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projects_manager_1 = __importDefault(require("../manager/projects.manager"));
const skillRouter = express_1.default.Router();
skillRouter.get('/', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield projects_manager_1.default.GET_allSkills());
    }
    catch (error) {
        next(error);
    }
}));
skillRouter.post('/skill', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auxSkill = req.body;
        res.send(yield projects_manager_1.default.POST_skill(auxSkill));
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}));
exports.default = skillRouter;
