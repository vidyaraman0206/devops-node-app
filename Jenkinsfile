pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    def nodeVersion = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    sh "${nodeVersion}/bin/npm install"
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    def nodeVersion = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    sh "${nodeVersion}/bin/npm test"
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Replace with your deployment script or commands
                    echo "Deploying to production..."
                }
            }
        }
    }
}
