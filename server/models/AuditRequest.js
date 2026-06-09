import mongoose from "mongoose";

const auditRequestSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
        trim: true,
    },
    websiteUrl: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    auditType: {
        type: String,
        required: true,
        trim: true,
    },
    concerns: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        default: "New"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const AuditRequest = mongoose.model("AuditRequest", auditRequestSchema);

export default AuditRequest;