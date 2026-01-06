pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo ' Building application from remote repo on github  '
            }
        }
        stage('Testing'){
            steps{ echo 'Running tests'}
        }
        stage('Deploy'){
            steps{ echo 'Deploying the app'}
        }
    }
}
