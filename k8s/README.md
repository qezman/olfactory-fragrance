# Kubernetes / Helm Charts

Helm charts are colocated with their respective application repositories following GitOps best practices.

## Frontend Helm Chart
- **Location**: https://github.com/qezman/olfactory-fragrance/tree/main/helm/olfactory-frontend
- **Resources**: Deployment, Service, Ingress, ConfigMap
- **Namespace**: olfactory

## Backend Helm Chart
- **Location**: https://github.com/qezman/olfactory-fragrance-backend/tree/main/helm/olfactory-fragrance-backend
- **Resources**: Deployment, Service, ConfigMap, Secret
- **Namespace**: olfactory

## Cluster-level Infrastructure (installed manually post-provisioning)

| Component | Namespace | Helm Chart |
|---|---|---|
| nginx-ingress | ingress-nginx | ingress-nginx/ingress-nginx |
| cert-manager | cert-manager | jetstack/cert-manager |
| Prometheus + Grafana | monitoring | prometheus-community/kube-prometheus-stack |