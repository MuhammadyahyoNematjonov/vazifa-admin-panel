import { BranchService } from "../service/brenchs.js";

class BranchController {
  constructor() {}

  async create(req, res, next) {
    try {
      let user = await BranchService.createBranch(req.body);
      console.log(user);
      
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

const branchController = new BranchController();
export default branchController;
