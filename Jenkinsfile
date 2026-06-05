pipeline {
    agent any

    environment {
        AWS_REGION      = 'us-east-1'
        ECR_REGISTRY    = '203637463799.dkr.ecr.us-east-1.amazonaws.com'
        ECR_REPO        = 'eks-project-frontend'
        IMAGE_TAG       = "${BUILD_NUMBER}"
        CLUSTER_NAME    = 'eks-project-eks'
        NAMESPACE       = 'olfactory'
        HELM_RELEASE    = 'olfactory-frontend'
        // Internal backend URL for SSR calls
        INTERNAL_API_URL = 'http://olfactory-fragrance-backend/api'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    // NEXT_PUBLIC_API_URL passed as build arg
                    sh """
                        docker build \
                          --build-arg NEXT_PUBLIC_API_URL=${INTERNAL_API_URL} \
                          -t ${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG} \
                          -t ${ECR_REGISTRY}/${ECR_REPO}:latest \
                          .
                    """
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    sh """
                        aws ecr get-login-password --region ${AWS_REGION} \
                          | docker login --username AWS --password-stdin ${ECR_REGISTRY}
                    """
                    sh "docker push ${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG}"
                    sh "docker push ${ECR_REGISTRY}/${ECR_REPO}:latest"
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                script {
                    sh "aws eks update-kubeconfig --region ${AWS_REGION} --name ${CLUSTER_NAME}"
                    sh "kubectl create namespace ${NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -"

                    sh """
                        helm upgrade --install ${HELM_RELEASE} ./helm/olfactory-frontend \
                          --namespace ${NAMESPACE} \
                          --set image.repository=${ECR_REGISTRY}/${ECR_REPO} \
                          --set image.tag=${IMAGE_TAG} \
                          --set env.NEXT_PUBLIC_API_URL=${INTERNAL_API_URL} \
                          --wait
                    """
                }
            }
        }

    }

    post {
        success {
            echo "Frontend deployed successfully - image tag: ${IMAGE_TAG}"
        }
        failure {
            echo "Pipeline failed - check logs above"
        }
        always {
            sh "docker rmi ${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG} || true"
        }
    }
}