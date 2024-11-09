// composables/useLearningTopics.ts
export const useLearningTopics = () => {
  const topics = [
    "In-depth Understanding of Google Cloud Platform",
    "GCP Compute Service: Virtual Machine (GCE), App Engine (GAE), Container Service (GKE), Google Cloud Function",
    "GCP Management Tools: Stackdriver Monitoring, Logging, Trace, Error Reporting, Deployment Manager, Shell, Console, Cloud SDK",
    "GCP IAM and Security: Cloud IAM, KMS, Resource Manager, Security Scanner",
    "GCP Services - Networking, Storage, Databases, Containers, Virtual Machines, App Engine, Security, etc.",
    "GCP Networking: VPC, CDN, Interconnect, DNS",
    "GCP Storage & Database Service: Cloud Storage, Cloud SQL, Cloud BigQuery, Cloud Spanner, Cloud DataStore"
  ];

  return { topics };
};
