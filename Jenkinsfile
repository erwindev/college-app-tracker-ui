pipeline {
    agent any

    stages {
        stage ('Install Packages'){
            steps{
                sh 'npm install --quiet'
            }
        }

        stage ('Build'){
            steps{
                sh 'ng build --target=production --environment=prod'
            }
        }
    }
}