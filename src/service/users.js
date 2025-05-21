import userModel from "../models/usersModel.js"
import { ValidationError } from "../utils/error.js"
import sha256 from "sha256"
import JWT from "../utils/jwt.js"
import path from "path"
export class UserService {
    constructor() {}

    static generateToken(data) {
        return {
            accessToken: JWT.sign(data),
            refreshToken: JWT.signRef(data)
        }
    }

    static async createUser(data,dataToc) {
        let user = await userModel.findOne({ username: data.username })
        if (user) throw new ValidationError(403, "User already exists")
        

        let newUser = await userModel.create({ ...data, password: sha256(data.password) })

        dataToc._id = newUser._id
    
        return this.generateToken({dataToc})
    }

    static async userLogin(data) {
        let user = await userModel.findOne({ username: data.username, password: sha256(data.password) }, { username: 1 })
        if (!user) throw new ValidationError(403, "User register qilmagan")

        return this.generateToken({ _id: user._id, username: user.username })
    }

    static async getUsers() {
        let users = await userModel.find({}, { username: 1, profile_img: 1 })

        return users
    }
}

