import client from "./client";

const login = (nationalCode, password) =>
  client.post("/auth", { nationalCode, password });
// const login = (nationalCode, password) => ({
//   data:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyU3RhdHVzIjoxLCJOYW1lIjoi2K3Yp9mF2K8iLCJGYW1pbHkiOiLYp9mB2LbZhNuMINmG2pjYp9ivINix2KfZiNix24wiLCJOYXRpb25hbENvZGUiOiIwMDYwODA2OTIzIiwiR3JvdXBJZCI6MSwiU3RhdHVzIjoxLCJCcmFuY2hOYW1lIjoi2KfYr9in2LHZhyDaqdmEINii2YXYp9ixINmIINio2YjYr9is2YciLCJCcmFuY2hDb2RlIjoiTTgwMDEiLCJDaGFydElkIjoyNSwiaWF0IjoxNjE2MTcyNjU1fQ.w7qdOEAGQ_PrEc3JTWUvsPo5B9L_Z5j_OJ35kBLhVQA",
//   ok: true,
// });
export default {
  login,
};
