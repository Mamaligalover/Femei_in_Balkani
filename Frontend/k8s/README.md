# Kubernetes Deployment for Balkan Women Connect Frontend

## 📋 Prerequisites

- Kubernetes cluster (v1.19+)
- kubectl configured to access your cluster
- Nginx Ingress Controller installed
- cert-manager installed (optional, for automatic SSL certificates)

## 📦 Resources

This deployment includes:
- **Deployment**: 2 replicas of the frontend application
- **Service**: ClusterIP service exposing port 80
- **Ingress**: Routes traffic from `balkan.codbun.com` to the service

## 🚀 Quick Deploy

### Option 1: Using kubectl

```bash
# Deploy all resources
kubectl apply -f k8s/

# Or deploy individually
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Option 2: Using Kustomize

```bash
# Deploy using kustomize
kubectl apply -k k8s/

# Or with kustomize build first
kustomize build k8s/ | kubectl apply -f -
```

## 🔍 Verify Deployment

```bash
# Check deployment status
kubectl get deployment balkani-frontend

# Check pods
kubectl get pods -l app=balkani-frontend

# Check service
kubectl get svc balkani-frontend

# Check ingress
kubectl get ingress balkani-frontend

# View detailed information
kubectl describe ingress balkani-frontend
```

## 📊 Resource Configuration

### Deployment
- **Replicas**: 2
- **Image**: `codbun/balkan:latest`
- **Resources**:
  - Requests: 100m CPU, 128Mi Memory
  - Limits: 200m CPU, 256Mi Memory
- **Probes**: Liveness and Readiness probes configured

### Service
- **Type**: ClusterIP
- **Port**: 80
- **Selector**: app=balkani-frontend

### Ingress
- **Host**: balkan.codbun.com
- **TLS**: Enabled (requires cert-manager)
- **Ingress Class**: nginx

## 🔐 SSL/TLS Configuration

The ingress is configured with cert-manager for automatic SSL certificate provisioning:

```yaml
cert-manager.io/cluster-issuer: "letsencrypt-prod"
```

### Prerequisites for SSL:
1. Install cert-manager:
```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml
```

2. Create ClusterIssuer (if not exists):
```bash
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
EOF
```

## 🌐 DNS Configuration

Ensure DNS is configured to point to your ingress controller:

```bash
# Get ingress controller external IP
kubectl get svc -n ingress-nginx ingress-nginx-controller

# Add A record:
# balkan.codbun.com -> <EXTERNAL-IP>
```

## 🔄 Update Deployment

### Update to a new version:

```bash
# Update image tag in deployment.yaml or kustomization.yaml
# Then apply:
kubectl apply -f k8s/deployment.yaml

# Or force rollout:
kubectl rollout restart deployment/balkani-frontend
```

### Rollback:

```bash
# View rollout history
kubectl rollout history deployment/balkani-frontend

# Rollback to previous version
kubectl rollout undo deployment/balkani-frontend

# Rollback to specific revision
kubectl rollout undo deployment/balkani-frontend --to-revision=2
```

## 📈 Scaling

```bash
# Scale up/down
kubectl scale deployment balkani-frontend --replicas=3

# Autoscaling (requires metrics-server)
kubectl autoscale deployment balkani-frontend --min=2 --max=10 --cpu-percent=80
```

## 🐛 Troubleshooting

### Check pod logs:
```bash
kubectl logs -l app=balkani-frontend --tail=100 -f
```

### Check specific pod:
```bash
kubectl logs <pod-name>
```

### Exec into pod:
```bash
kubectl exec -it <pod-name> -- sh
```

### Check events:
```bash
kubectl get events --sort-by='.lastTimestamp'
```

### Debug ingress:
```bash
# Check ingress controller logs
kubectl logs -n ingress-nginx -l app.kubernetes.io/name=ingress-nginx

# Check certificate
kubectl describe certificate balkani-frontend-tls
```

## 🗑️ Cleanup

```bash
# Delete all resources
kubectl delete -f k8s/

# Or using kustomize
kubectl delete -k k8s/

# Delete specific resources
kubectl delete deployment balkani-frontend
kubectl delete service balkani-frontend
kubectl delete ingress balkani-frontend
```

## 📝 Notes

- The application will be available at: https://balkan.codbun.com
- SSL certificate will be automatically provisioned by cert-manager
- Health checks are configured for high availability
- Resource limits prevent excessive resource consumption

## 🔗 Related Documentation

- [Kubernetes Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes Services](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Kubernetes Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)
- [cert-manager](https://cert-manager.io/docs/)
- [Nginx Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
