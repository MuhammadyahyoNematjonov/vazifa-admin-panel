import  branchModel  from "../models/brenchmodel.js";

export class BranchService {
  constructor() {}

  static async createBranch(payload) {
    let newBranch = await branchModel.create(payload);
    return newBranch;
  }
}
