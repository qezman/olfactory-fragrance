pipeline {
  agent any

  environment {
    AWS_REGION      = 'us-east-1'                          // update to your region
    ECR_REGISTRY    = credentials('ECR_REGISTRY')          // set in Jenkins credentials
    IMAGE_NAME      = 'olfactory-frontend'
    IMAGE_TAG       = "${env.BUILD_NUMBER}-${env.GIT_COMMIT?.take(7)}"
    K8S_NAMESPACE   = 'olfactory'
    HELM_RELEASE    = 'olfactory'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build & Push') {
      steps {
        withCredentials([string(credentialsId: 'ECR_REGISTRY', variable: 'ECR_REGISTRY')]) {
          sh """
            aws ecr get-login-password --region ${AWS_REGION} | \
              docker login --username AWS --password-stdin ${ECR_REGISTRY}

            docker build \
              --build-arg NEXT_PUBLIC_API_URL=http://olfactory-fragrance-backend/api \
              -t ${ECR_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} \
              -t ${ECR_REGISTRY}/${IMAGE_NAME}:latest \
              .

            docker push ${ECR_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
            docker push ${ECR_REGISTRY}/${IMAGE_NAME}:latest
          """
        }
      }
    }

    stage('Deploy via Helm') {
      steps {
        withCredentials([string(credentialsId: 'ECR_REGISTRY', variable: 'ECR_REGISTRY')]) {
          sh """
            helm upgrade --install ${HELM_RELEASE} ./helm/olfactory-frontend \
              --namespace ${K8S_NAMESPACE} \
              --create-namespace \
              --set image.repository=${ECR_REGISTRY}/${IMAGE_NAME} \
              --set image.tag=${IMAGE_TAG} \
              --wait \
              --timeout 5m
          """
        }
      }
    }

  }

  post {
    success {
      echo "✅ Deployed ${IMAGE_NAME}:${IMAGE_TAG} to namespace ${K8S_NAMESPACE}"
    }
    failure {
      echo "❌ Pipeline failed — check logs above"
    }
    always {
      cleanWs()
    }
  }
}
