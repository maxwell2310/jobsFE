const Job = require('../Models/jobModel')


exports.CreateNewJob = async (req, res) => {
    try {
        console.log(req.body);
        const { designation, position, limit, jobDescription, userId } = req.body
        var createJob = await Job.create({
            designation: designation,
            jobDescription: jobDescription,
            positions: position,
            limit: limit,
            createdBy: userId
        })
        createJob.save()
        if (createJob) res.json({ success: "Job added Successfully",data:createJob })
    }
    catch {
        res.json({ error: "Job creation fail" })
    }
}


exports.allJob = async (req, res) => {
    var allJobs = await Job.find({}).lean()
    res.send(allJobs)
}



exports.OneJob = async (req, res) => {
    var id = req.params.id
    var onejob = await Job.findOne({ _id: id }).lean()
    res.send(onejob)
}