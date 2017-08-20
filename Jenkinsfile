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

        stage ('Upload to S3'){
            steps{
                withAWS(credentials:'ealberto-aws-id') {
                    s3Delete(bucket:'www.erwindev.com', path:'/')
                    s3Upload(file:'dist', bucket:'www.erwindev.com', path:'')
                }     
            }      
        }
    }
}